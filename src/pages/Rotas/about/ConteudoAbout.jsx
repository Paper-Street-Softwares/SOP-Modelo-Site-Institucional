import React, { useEffect, useRef } from "react";
import SectionHeaderNovo from "../../../components/sectionElements/SectionHeaderNovo";
import { ScrollMouse } from "../../../components/animation/MouseScroll";
import SectionArea from "../../../components/sectionElements/SectionArea";
import imgAbout from "../../../assets/imgs/about/aboutRouteImg.webp";
import "../../../styles/ScrollPanelDemo.css";

function ConteudoAbout({ colorMode }) {
  const boxRef = useRef(null);

  useEffect(() => {
    const el = $(boxRef.current);
    const dot = $(".scroll-dot");

    el.css({
      height: "400px",
      overflowY: "auto",
    });

    el.on("scroll", function () {
      const scrollTop = el.scrollTop();
      const scrollHeight = el[0].scrollHeight - el.outerHeight();
      const percent = scrollTop / scrollHeight;

      const indicatorHeight = $(".scroll-indicator").height() - dot.height();
      const topPos = percent * indicatorHeight;

      dot.css("top", `${topPos}px`);
    });

    return () => {
      el.off("scroll");
    };
  }, []);

  return (
    <div>
      <section
        id="home"
        className="relative h-[65vh] phone2:h-[80vh] phone3:h-[90vh] tablet1:h-[47vh] flex flex-col items-center justify-center overflow-hidden w-full"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://miguelneto.com.br/wp-content/uploads/2022/11/Empresa-fotos-1-768x513.jpg"
            alt="Cityscape"
            className="w-full h-full object-cover bg-center"
          />
          <div className="absolute inset-0 bg-[#0f2a3a]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a3a] via-transparent to-transparent" />
        </div>

        <div className="z-10 w-full flex justify-center absolute bottom-0 tablet2:bottom-5">
          <ScrollMouse />
        </div>
      </section>

      <SectionArea>
        <SectionHeaderNovo
          colorMode={colorMode}
          title="Sobre nós"
          className="mb-4"
        />

        <div className="relative w-[90%] flex flex-col tablet2:flex-row gap-14">
          <img
            src={imgAbout}
            alt="imagem representativa do Consultório"
            className="w-full mx-auto tablet2:w-[50%] desktop1:w-[595px] z-10"
          />

          <div className="relative w-[90%] mx-auto flex tablet2:w-[555px]">
            {/* Área com scroll */}
            <div ref={boxRef} className="custom-native-scroll flex-1 pt-10">
              <p className="text-justify font-light text-black/70">
                Fundado em 1990, o Miguel Neto Advogados tem seu foco na atuação
                abrangente, envolvendo as principais áreas de atendimento ao
                setor corporativo. Em mais de 34 anos de atividade, é
                reconhecido nacional e internacionalmente pela capacidade em
                atender demandas complexas e sofisticadas, sempre zelando pela
                garantia da segurança jurídica nas soluções que apresenta às
                empresas dos mais diversos segmentos do mercado.
                <br />
                <br />
                Com solidez e alta expertise de seus profissionais, busca
                viabilizar os mais variados projetos de seus clientes através de
                um assessoramento jurídico embasado e focado no negócio.
                <br />
                <br />
                Somos famosos por tornarmos parceiros diretos dos negócios
                assessorados, atuando para construir relações de confiança.
                <br />
                <br />
                Este é o Miguel Neto Advogados: compromisso com o cliente.
              </p>
            </div>

            {/* Linha + bolinha */}
            <div className="scroll-indicator tablet2:mt-10">
              <span className="scroll-dot" />
            </div>
          </div>
        </div>
      </SectionArea>
    </div>
  );
}

export default ConteudoAbout;
