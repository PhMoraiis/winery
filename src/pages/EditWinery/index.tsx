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

  const handleDelete = () => {
    // excluir vinícola do backend
    API.delete(`/vinicolas/${winery.id}`, { responseType: 'json' })
      .then((response: AxiosResponse) => {
        console.log('Winery deleted:', response.data);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Edit Winery</h1>
      <WineryForm
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
      <button onClick={handleSave}>Save</button>
      <button onClick={handleDelete}>Deletar Vinicola</button>
    </div>
  );
};

export default WineryEditForm;
