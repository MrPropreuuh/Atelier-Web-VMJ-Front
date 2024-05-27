'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TaskTable from './TaskTable'; // Assurez-vous de bien importer votre nouveau composant
import TaskDialog from './TaskDialog'; // Assurez-vous de bien importer votre nouveau composant

interface Task {
    priorite: string;
    name: string;
    assignedTo: string;
    dateToFinish: string;
    status: 'Terminé' | 'En cours' | 'A faire';
}

const initialTasks: Task[] = [
    { priorite: 'Haute', name: 'Liaison entre toutes les pages', assignedTo: 'VMJ', dateToFinish: '11/04', status: 'A faire' },
    { priorite: 'Haute', name: "Ajout des œuvres d'art faite maison par l'artiste Maxime", assignedTo: 'Maxime', dateToFinish: '11/04', status: 'En cours' },
    { priorite: 'Haute', name: 'Ajout backend', assignedTo: 'VMJ', dateToFinish: '11/04', status: 'En cours' },
    { priorite: 'Moyen', name: 'Ajout dashboard', assignedTo: 'Vincent', dateToFinish: '11/04', status: 'En cours' },
    { priorite: 'Basse', name: 'Ajout de page commande fictif', assignedTo: 'Vincent', dateToFinish: '11/04', status: 'Terminé' },
    { priorite: 'Basse', name: 'Ajout page contact', assignedTo: 'Jules', dateToFinish: '11/04', status: 'Terminé' },
    { priorite: 'Basse', name: 'Ajout navbar', assignedTo: 'Maxime', dateToFinish: '11/04', status: 'Terminé' },
    { priorite: 'Moyen', name: 'Ajout page login/register', assignedTo: 'Jules', dateToFinish: '11/04', status: 'En cours' },
    { priorite: 'Haute', name: 'Ajout page accueil', assignedTo: 'Maxime', dateToFinish: '11/04', status: 'En cours' },
];

const TaskListCard: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const handleStatusChange = (index: number, status: 'Terminé' | 'En cours' | 'A faire') => {
        const newTasks = [...tasks];
        newTasks[index].status = status;
        setTasks(newTasks);
    };

    const maxTasksToShow = 8;
    const tasksToShow = tasks.slice(0, maxTasksToShow);

    return (
        <Card className="mt-4">
            <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>Liste de Tâches</CardTitle>
                {tasks.length > maxTasksToShow && (
                    <TaskDialog tasks={tasks} onStatusChange={handleStatusChange} />
                )}
            </CardHeader>
            <CardContent className="grid gap-4">
                <TaskTable tasks={tasksToShow} onStatusChange={handleStatusChange} />
            </CardContent>
        </Card>
    );
};

export default TaskListCard;
