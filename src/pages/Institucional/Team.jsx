import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import TeamSectionNew from "../../components/sections/TeamSection";
import TeamMember from "../../components/cards/TeamMember";

function TeamSection({ colorMode }) {
  return (
    <SectionArea className={`bg-[#F0E3D1]`} paddingTopAndBottom={false}>
      <section className="py-24 ">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeaderNovo title="Sócios" colorMode={colorMode} />

          <div className="flex flex-wrap gap-6 tablet2:gap-20 desktop1:gap-[2%]">
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
          </div>
        </div>
      </section>
    </SectionArea>
  );
}

export default TeamSection;
