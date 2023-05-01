export interface VinicolaFormProps extends React.HTMLAttributes<HTMLFormElement> {
    id?: string;
    name: string;
    description: string;
    image: string;
    wine_tasting: boolean;
    tour: boolean;
    restaurant: boolean;
    hotel: boolean;
    bikes: boolean;
    trakking: boolean;
    viewpoint: boolean;
    cafeteria: boolean;
    playground: boolean;
    acessibility: boolean;
    pool: boolean;
    cable_car: boolean;
    kayak: boolean;
    onInputChange?: any;
    onCheckboxChange?: any;
    handleCadastro?: any;
  }