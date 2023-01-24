import { book} from "./book";

export interface Author{
    id:number;
    name:string;
    image:string;
    category:book;
}

export interface CreateAuthorDto extends Omit<Author, 'id'| 'category'>{
    categoryId:number;
}

export interface UpdateAuthorDto extends Partial<Author>{
    categoryId:number;
}