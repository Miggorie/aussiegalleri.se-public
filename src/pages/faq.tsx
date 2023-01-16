import Accordion from "../components/accordioncomponent/Accordion";

function Faq() {
  const items = [
    {
      id: "1",
      label: "Kostar fotograferingen och får jag bilderna?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "2",
      label: "Kan jag köpa bilderna?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "3",
      label: "Hur får jag information om när ni ska fotografera?",
      content:
        "Det bästa är att följa aussiegalleriet på Instagram och Facebook. Framförallt sker informationen om fototräffar på Instagram.",
    },
    {
      id: "4",
      label: "Vad ska jag tänka på inför fotograferingen?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "4",
      label: "Kan jag skicka in egna bilder?",
      content:
        "På grund av Copywrightskäl kan du inte skicka in dina egna bilder.",
    },
  ];

  return (
    <div>
      <h3 className="text-2xl m-12">Vanliga frågor</h3>
      <div className="flex">
        <div className="w-1/3 ml-12 mr-10">
          <p>
            Här är de vanligaste frågorna, undrar ni någonting som inte finns
            med? Kontakta oss gärna så kan vi hjälpa dig!
          </p>
        </div>
        <div className="w-2/3 mr-12 mb-12">
          <Accordion items={items} />
        </div>
      </div>
    </div>
  );
}

export default Faq;
