import { Navbar01 } from '@/components/ui/navbar-01';
import { StartupApplicationFormComponent } from '@/components/ui/startup-application-form';
import { Footer } from '@/components/ui/footer';

export default function ApplyPage() {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar01 />
      <StartupApplicationFormComponent />
      <Footer />
    </div>
  );
}

