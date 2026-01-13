import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null; //tempo final do timer ou timer interrompido
    interruptDate: number | null; //task interrompida
    type: keyof TaskStateModel["config"];
}