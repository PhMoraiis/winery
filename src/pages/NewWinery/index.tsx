import { useState } from "react";
import WineryForm from "../../components/WineryForm";
import { AxiosError, AxiosResponse } from "axios";
import { VinicolaFormProps } from "../../components/WineryForm/type";
import { API } from "../../api";

const WineryCreateForm = () => {
  const [winery, setWinery] = useState<VinicolaFormProps>({
    id: "",
    name: "",
    description: "",
    image: "",
    wine_tasting: false,
    tour: false,
    restaurant: false,
    hotel: false,
    bikes: false,
    trakking: false,
    viewpoint: false,
    cafeteria: false,
    playground: false,
    accessibility: false,
    pool: false,
    cable_car: false,
    kayak: false,
  });

  const handleSave = () => {
    // enviar dados da nova vinícola para o backend
    API.post("/vinicolas", winery, { responseType: "json" })
      .then((response: AxiosResponse<VinicolaFormProps>) => {
        console.log("Winery created:", response.data);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-naveidBd mt-8 mb-8 paragraph">Cadastrar Vinicola</h1>
      <div>
        <WineryForm
          id={winery.id}
          name={winery.name}
          description={winery.description}
          image={winery.image}
          wine_tasting={winery.wine_tasting}
          tour={winery.tour}
          restaurant={winery.restaurant}
          hotel={winery.hotel}
          bikes={winery.bikes}
          trakking={winery.trakking}
          viewpoint={winery.viewpoint}
          cafeteria={winery.cafeteria}
          playground={winery.playground}
          accessibility={winery.accessibility}
          pool={winery.pool}
          cable_car={winery.cable_car}
          kayak={winery.kayak}
          onInputChange={(name: any, value: any) =>
            setWinery({ ...winery, [name]: value })
          }
        />
      </div>
        <button
          className="gradient text-white font-gilroyLt py-2 px-6 rounded-lg mt-8"
          onClick={handleSave}
        >
          Cadastrar
        </button>
    </div>
  );
};

export default WineryCreateForm;
