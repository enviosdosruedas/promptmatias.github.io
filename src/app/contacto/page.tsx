

import { HeroContacto } from "@/components/sections/HeroContacto"; // Import the Hero component
import { Principalcontacto } from "@/components/sections/Principalcontacto"; // Import the new Principalcontacto component
import { EmprendedorContacto } from "@/components/sections/EmprendedorContacto"; // Import the new EmprendedorContacto component
import { InfoContacto } from "@/components/sections/InfoContacto"; // Import the new InfoContacto component

export default function ContactoPage() {
  return (
    <> {/* Added Fragment */}
      <HeroContacto /> {/* Integrate the Hero component */}
      <Principalcontacto /> {/* Integrate the Principalcontacto component */}
       <InfoContacto /> {/* Integrate the InfoContacto component */}
      <EmprendedorContacto /> {/* Integrate the EmprendedorContacto component */}
    </>
  );
}
