'use client';

import * as React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StartupApplicationForm } from '@/lib/form-data';
import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

// Map startup stage from form value to webhook format
const mapStartupStage = (stage) => {
  if (!stage) return '';
  // Return the stage in uppercase
  return stage.toUpperCase();
};

// Format stage for display (convert to title case with spaces)
const formatStageForDisplay = (stage) => {
  if (!stage) return '';
  return stage
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
};

const validateField = (value, validation) => {
  if (!value || value.trim() === '') {
    return 'This field is required';
  }

  switch (validation) {
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) ? '' : 'Please enter a valid email address';
    
    case 'url':
      try {
        // Add https:// if no protocol is provided
        const urlToTest = value.startsWith('http://') || value.startsWith('https://') 
          ? value 
          : `https://${value}`;
        new URL(urlToTest);
        return '';
      } catch {
        return 'Please enter a valid URL';
      }
    
    case 'year':
      const year = parseInt(value);
      const currentYear = new Date().getFullYear();
      return (!isNaN(year) && year >= 1900 && year <= currentYear) 
        ? '' 
        : 'Please enter a valid year';
    
    case 'text':
    default:
      return '';
  }
};

export const StartupApplicationFormComponent = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = StartupApplicationForm.question;

  // Group questions by section (stepTitle)
  const groupQuestionsBySection = () => {
    const sections = [];
    let currentSection = null;

    questions.forEach((question, index) => {
      if (question.stepTitle) {
        // Start a new section
        currentSection = {
          title: question.stepTitle,
          description: question.stepDescription || '',
          questions: []
        };
        sections.push(currentSection);
      }
      
      // Add question to current section (or create a default section if none exists)
      if (!currentSection) {
        currentSection = {
          title: '',
          description: '',
          questions: []
        };
        sections.push(currentSection);
      }
      
      currentSection.questions.push(question);
    });

    return sections;
  };

  const sections = groupQuestionsBySection();

  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    
    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }));
    }
  };

  const validateAllFields = () => {
    const newErrors = {};
    let hasErrors = false;
    let firstErrorField = null;

    questions.forEach((question) => {
      const fieldName = question.field_name;
      const value = formData[fieldName] || '';
      
      // Validate field
      const error = validateField(value, question.validation);
      
      if (error) {
        newErrors[fieldName] = error;
        if (!hasErrors) {
          firstErrorField = fieldName;
        }
        hasErrors = true;
      }

      // Check maxLength if specified
      if (question.maxLength && value.length > question.maxLength) {
        newErrors[fieldName] = `Maximum ${question.maxLength} characters allowed`;
        if (!hasErrors) {
          firstErrorField = fieldName;
        }
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    return { isValid: !hasErrors, firstErrorField };
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    // Validate all fields before submitting
    const validationResult = validateAllFields();
    if (!validationResult.isValid) {
      // Scroll to first error after a brief delay to allow state update
      setTimeout(() => {
        if (validationResult.firstErrorField) {
          const errorElement = document.querySelector(`[data-field-name="${validationResult.firstErrorField}"]`);
          if (errorElement) {
            errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }, 100);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Map form data to webhook structure
      const values = formData;
      const webhookData = {
        startup: {
          name: values.brandName || "",
          legal_name: values.legalName || "",
          founders: "", // This field is not in the current form
          overview: values.briefYourStartup || "",
          geographical_address: values.address || "",
          stage: mapStartupStage(values.startupStage || ""),
          startup_source: "APPLICATION_FORM",
          thesis: "", // Default value as we don't have this field
          links: values.website || "",
          email: values.email || "", // Adding email data to the webhook payload
          startupIndustryDomain: values.domain || "",
          ceoLinkedinUrl: values.linkedin || "",
        }
      };

      const response = await fetch('https://automate.indiaaccelerator.co/webhook/c96cf54f-2013-41b4-9cb6-810f44ac362a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json().catch(() => ({})); // Handle case where response might not be JSON
      
      setIsSubmitted(true);
      console.log('Form submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit application. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Show success message after submission
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl p-8 text-center"
          >
            <div className="mb-4">
              <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
              Application Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest. We'll review your application and get back to you soon.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({});
                setErrors({});
                setSubmitError('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 text-white"
              style={{
                background: 'linear-gradient(90deg, #C82516 0%, #EE594C 51.44%, #C82516 100%)',
                fontFamily: 'var(--font-poppins), sans-serif'
              }}
            >
              Submit Another Application
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Render question field
  const renderQuestionField = (question) => {
    const fieldName = question.field_name;
    const value = formData[fieldName] || '';

    return (
      <div key={fieldName} data-field-name={fieldName} className="mb-6">
        <label className="block text-lg font-medium text-gray-900 mb-3" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
          {question.question}
          <span className="text-red-500 ml-1">*</span>
          {question.maxLength && (
            <span className="text-sm text-gray-500 ml-2">
              ({value.length}/{question.maxLength} characters)
            </span>
          )}
        </label>

        {/* Input Field */}
        {question.question_type === 'text' ? (
          <div>
            {question.maxLength || question.isTextarea ? (
              <textarea
                value={value}
                onChange={(e) => handleInputChange(fieldName, e.target.value)}
                placeholder={question.placeholder}
                rows={question.isTextarea ? 3 : 4}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EE594C] transition-all resize-none ${
                  errors[fieldName] ? 'border-red-500' : 'border-gray-300'
                }`}
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                maxLength={question.maxLength}
              />
            ) : (
              <input
                type={question.validation === 'email' ? 'email' : 'text'}
                value={value}
                onChange={(e) => handleInputChange(fieldName, e.target.value)}
                placeholder={question.placeholder}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EE594C] transition-all ${
                  errors[fieldName] ? 'border-red-500' : 'border-gray-300'
                }`}
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              />
            )}
            {errors[fieldName] && (
              <p className="text-red-500 text-sm mt-2">{errors[fieldName]}</p>
            )}
          </div>
        ) : question.question_type === 'mcq' ? (
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleInputChange(fieldName, option)}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                  value === option
                    ? 'border-[#EE594C] bg-[#FFF5F5] text-[#EE594C]'
                    : 'border-gray-300 hover:border-[#EE594C]/50 hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                <div className="flex items-center justify-between">
                  <span>{formatStageForDisplay(option)}</span>
                  {value === option && (
                    <Check className="w-5 h-5" />
                  )}
                </div>
              </button>
            ))}
            {errors[fieldName] && (
              <p className="text-red-500 text-sm mt-2">{errors[fieldName]}</p>
            )}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
            <span className="text-[#EE594C]">{StartupApplicationForm.highlight_text}</span>{' '}
            Application Form
          </h1>
          {StartupApplicationForm.sub_title && (
            <p className="text-gray-600 mt-2">{StartupApplicationForm.sub_title}</p>
          )}
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl p-6 sm:p-8 mb-6"
          >
            {/* Render all sections */}
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={sectionIndex > 0 ? 'mt-8 pt-8 border-t border-gray-200' : ''}>
                {/* Section Header */}
                {section.title && (
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                      {section.title}
                    </h2>
                    {section.description && (
                      <p className="text-gray-600">{section.description}</p>
                    )}
                  </div>
                )}

                {/* Render questions in this section */}
                {section.questions.map((question) => renderQuestionField(question))}
              </div>
            ))}
          </motion.div>

          {/* Submit Error Message */}
          {submitError && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{submitError}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 text-white text-lg"
              style={{
                background: 'linear-gradient(90deg, #C82516 0%, #EE594C 51.44%, #C82516 100%)',
                fontFamily: 'var(--font-poppins), sans-serif'
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

