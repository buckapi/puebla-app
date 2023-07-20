export interface Pack{
	id?:string;
	name?:string;
	location?:string;
	description?:string;
	shortDescription?:string;
	status?:string;
	images:string[]; 
	valid?:number;
	promocionado?:boolean;
	duration: string;
	cost: string;
}