
import { HeroContacto } from "@/components/sections/HeroContacto"; // Import the Hero component
import { Principalcontacto } from "@/components/sections/Principalcontacto"; // Import the new Principalcontacto component

export default function ContactoPage() {
  return (
    <> {/* Added Fragment */}
      <HeroContacto /> {/* Integrate the Hero component */}
      <Principalcontacto /> {/* Integrate the Principalcontacto component */}
      {/* The contact form section has been removed */}
    </>
  );
}
