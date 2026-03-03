import React, { useEffect, useRef } from "react";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import SectionArea from "../../../components/sectionElements/SectionArea";
import "../../../styles/ScrollPanelDemo.css";
import TeamMember from "../../../components/cards/TeamMember";
import SectionWrapper from "../../../components/sectionElements/SectionWrapper";

function ConteudoTeam({ colorMode }) {
  return (
    <div>
      <SectionArea className={`bg-[#F0E3D1]`}>
        <SectionWrapper className={``}>
          <div className="mx-auto px-4 md:px-0 my-10">
            <SectionHeaderNovo
              title="Sócios"
              colorMode={colorMode}
              className={`mb-6`}
            />

            <div className="flex flex-wrap gap-6 tablet2:gap-12 desktop1:gap-[1%]">
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Miguel_neto_600x600-2-300x300.png"
                name="J. A Miguel Neto"
                phone=" 11 5502-1205"
                email=" mno@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Decio_600x600_-300x300.png"
                name="Décio Andrade"
                phone="11 5502-1216"
                email=" dae@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Andre_Rizk-perfil_novo-300x300.jpg"
                name="André Rizk"
                phone="11 5502-1212"
                email="ark@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Decio_600x600_-300x300.png"
                name="Décio Andrade"
                phone="11 5502-1216"
                email=" dae@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Miguel_neto_600x600-2-300x300.png"
                name="J. A Miguel Neto"
                phone=" 11 5502-1205"
                email=" mno@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Andre_Rizk-perfil_novo-300x300.jpg"
                name="André Rizk"
                phone="11 5502-1212"
                email="ark@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Miguel_neto_600x600-2-300x300.png"
                name="J. A Miguel Neto"
                phone=" 11 5502-1205"
                email=" mno@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Decio_600x600_-300x300.png"
                name="Décio Andrade"
                phone="11 5502-1216"
                email=" dae@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Andre_Rizk-perfil_novo-300x300.jpg"
                name="André Rizk"
                phone="11 5502-1212"
                email="ark@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Decio_600x600_-300x300.png"
                name="Décio Andrade"
                phone="11 5502-1216"
                email=" dae@miguelneto.com.br"
              />
            </div>
          </div>

          <div className="mx-auto px-4 md:px-0 mt-12 mb-10">
            <SectionHeaderNovo
              title="Nossa Equipe"
              colorMode={colorMode}
              className={`mb-6`}
            />

            <div className="flex flex-wrap gap-6 tablet2:gap-12 desktop1:gap-[1%]">
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Miguel_neto_600x600-2-300x300.png"
                name="J. A Miguel Neto"
                phone=" 11 5502-1205"
                email=" mno@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Decio_600x600_-300x300.png"
                name="Décio Andrade"
                phone="11 5502-1216"
                email=" dae@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Andre_Rizk-perfil_novo-300x300.jpg"
                name="André Rizk"
                phone="11 5502-1212"
                email="ark@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Decio_600x600_-300x300.png"
                name="Décio Andrade"
                phone="11 5502-1216"
                email=" dae@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Miguel_neto_600x600-2-300x300.png"
                name="J. A Miguel Neto"
                phone=" 11 5502-1205"
                email=" mno@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Andre_Rizk-perfil_novo-300x300.jpg"
                name="André Rizk"
                phone="11 5502-1212"
                email="ark@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Miguel_neto_600x600-2-300x300.png"
                name="J. A Miguel Neto"
                phone=" 11 5502-1205"
                email=" mno@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Decio_600x600_-300x300.png"
                name="Décio Andrade"
                phone="11 5502-1216"
                email=" dae@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Andre_Rizk-perfil_novo-300x300.jpg"
                name="André Rizk"
                phone="11 5502-1212"
                email="ark@miguelneto.com.br"
              />
              <TeamMember
                img="https://miguelneto.com.br/wp-content/uploads/2016/04/Decio_600x600_-300x300.png"
                name="Décio Andrade"
                phone="11 5502-1216"
                email=" dae@miguelneto.com.br"
              />
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

export default ConteudoTeam;
