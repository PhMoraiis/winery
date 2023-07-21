import { useEffect, useState } from "react";
import { API } from "../../api";
import { AxiosResponse } from "axios";

export interface Winery {
  id: number;
  name: string;
  description: string;
  image: string;
}

const WineryEditForm: React.FC<Winery> = ({ id, name, description, image }) => {
  const [editWinery, setEditWinery] = useState<Winery>({
    id: id,
    name: name,
    description: description,
    image: image,
  });

  useEffect(() => {
    if (id) {
      // fetch the winery data from the backend and update the state
      API.get<Winery>(`/vinicolas/${id}`)
        .then((response: AxiosResponse<Winery>) => {
          setEditWinery(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleEditWinery = (e: React.FormEvent) => {
    e.preventDefault();

    // send the updated winery data to the backend
    API.put<Winery>(`/vinicolas/${editWinery.id}`, editWinery)
      .then((response: AxiosResponse<Winery>) => {
        console.log("Winery updated:", response.data);
        // Optionally, you can perform any additional actions after the successful update
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-naveidBd mt-8 mb-8 paragraph">Editar Vinícola</h1>
      <form
        onSubmit={handleEditWinery}
        className="bg-[#f6f6f6] py-6 px-6 rounded-md shadow-xl md:w-2/3 lg:w-[80vw] mx-auto border-2 border-[#fc9f32]"
      >
        {/* Input fields for name and image URL */}
        <div className="flex flex-col md:flex-row">
          <label className="block mb-4 mt-2 text-gray-700 md:w-1/4 font-naveidRg items-center">
            Nome*:
          </label>
          <input
            type="text"
            name="name"
            className="block w-full rounded-md shadow-lg mb-4 border-[#fc9f32] focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] md:w-4/4"
            value={editWinery.name}
            onChange={(e) => setEditWinery({ ...editWinery, name: e.target.value })}
          />

          <label className="block mb-4 ml-10 mt-2 text-gray-700 md:w-2/4 font-naveidRg items-center">
            URL da imagem*:
          </label>
          <input
            type="text"
            name="image"
            className="block w-full border-[#fc9f32] rounded-md shadow-lg mb-4 focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] md:w-4/4"
            value={editWinery.image}
            onChange={(e) => setEditWinery({ ...editWinery, image: e.target.value })}
          />
        </div>

        {/* Textarea field for description */}
        <label className="block mb-2 text-gray-700 font-naveidRg">Descrição*:</label>
        <textarea
          className="block w-full border-[#fc9f32] rounded-md shadow-lg mb-4 focus:border-[#ae1b1e] focus:ring focus:ring-[#fc9f32] resize-none"
          rows={4}
          value={editWinery.description}
          name="description"
          onChange={(e) => setEditWinery({ ...editWinery, description: e.target.value })}
        ></textarea>

        <button
          type="submit"
          className="gradient text-white font-gilroyLt py-2 px-6 rounded-lg mt-8"
        >
          Editar
        </button>
      </form>
    </div>
  );
};

export default WineryEditForm;
