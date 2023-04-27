import { useState, useEffect } from 'react';
import WineryForm from '../../components/WineryForm';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { WineryFormProps } from './type';
import { API } from '../../api';

const WineryEditForm = () => {
  const [winery, setWinery] = useState<WineryFormProps>({
    id: '',
    name: '',
    description: '',
    image: '',
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

  useEffect(() => {
    // buscar dados da vinícola no backend e atualizar o estado
    API.get(`/vinicolas/${winery.id}`, { responseType: 'json' })
      .then((response: AxiosResponse<WineryFormProps>) => {
        setWinery(response.data);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  }, []);

  const handleSave = () => {
    // enviar dados atualizados da vinícola para o backend
    API.put(`/vinicolas/${winery.id}`, winery, { responseType: 'json' })
      .then((response: AxiosResponse<WineryFormProps>) => {
        console.log('Winery updated:', response.data);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 md:px-8 lg:px-16">
      <h1 className="text-2xl font-bold mb-4">Edit Winery</h1>
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
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleSave}>Save</button>
    </div>
  );
};

export default WineryEditForm;
