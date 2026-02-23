import React from "react";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import SectionHeaderNovo from "../../components/sectionElements/SectionHeaderNovo";
import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";
import NewsCardsInstitucional from "../../components/cards/NewsCardsInstitucional";

function News() {
  return (
    <SectionArea>
      <SectionWrapper>
        <section className="pt-[60px]">
          <div className=" w-full">
            <SectionHeaderNovo title="Notícias e Publicações" />

            <div className="flex flex-wrap gap-12 desktop2:gap-6">
              <NewsCardsInstitucional
                category="Artigo"
                title="Receita ajusta pagamento de prêmios sem encargo previdenciário"
                excerpt="Análise detalhada sobre as principais mudanças trazidas pela Lei nº 14.133/2021 e seus impactos."
                date="15 MAI 2024"
                author="Miguel Neto"
                /* unsplash: "close up of pen on contract document" */
                imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
              />
              <NewsCardsInstitucional
                category="Institucional"
                title="Novas regras do vale-refeição e alimentação: preços vão cair? O que muda para trabalhador?"
                excerpt="Pelo 10º ano consecutivo, figuramos entre os escritórios mais admirados do Brasil."
                date="02 ABR 2024"
                author="Equipe MNA"
                /* unsplash: "modern office building exterior glass" */
                imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
              />
              <NewsCardsInstitucional
                category="Tributário"
                title="Lei Complementar Nº 227/2026 regulamenta a segunda fase da Reforma Tributária"
                excerpt="Entenda os impactos da PEC 45/2019 para as empresas prestadoras de serviços."
                date="20 MAR 2024"
                z
                author="Ana Silva"
                /* unsplash: "calculator and financial charts" */
                imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
              />
              <NewsCardsInstitucional
                category="Trabalhista"
                title="Novas regras para o trabalho remoto e híbrido"
                excerpt="As recentes alterações na legislação trabalhista sobre o regime de teletrabalho."
                date="10 FEV 2024"
                author="Carlos Souza"
                /* unsplash: "person typing on laptop home office" */
                imageUrl="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&q=80&w=800"
              />
            </div>

            <div className="mt-8 text-center">
              <button className="bg-[#0f2a3a] text-white w-fit py-3 px-6 text-[15px] rounded-sm">
                TODAS AS NOTÍCIAS
              </button>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default News;
