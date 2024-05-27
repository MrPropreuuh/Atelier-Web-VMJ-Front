import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge'; // Assurez-vous d'importer le composant Badge

interface Task {
    priorite: string;
    name: string;
    assignedTo: string;
    dateToFinish: string;
    status: 'Terminé' | 'En cours' | 'A faire';
}

interface TaskTableProps {
    tasks: Task[];
    onStatusChange: (index: number, status: 'Terminé' | 'En cours' | 'A faire') => void;
}

const TaskTable: React.FC<TaskTableProps> = ({ tasks, onStatusChange }) => {
    // Fonction de comparaison pour trier les tâches par statut
    const compareStatus = (a: Task, b: Task) => {
        const order = { 'A faire': 1, 'En cours': 2, 'Terminé': 3 };
        return order[a.status] - order[b.status];
    };

    // Trier les tâches en fonction de leur statut
    const sortedTasks = tasks.sort(compareStatus);

    return (
        <Table>
            <TableCaption>Kanban site.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Priorité</TableHead>
                    <TableHead>Tâches</TableHead>
                    <TableHead>Esclave</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right w-[150px]">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sortedTasks.map((task, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{task.priorite}</TableCell>
                        <TableCell className='max-w-[200px]'>{task.name}</TableCell>
                        <TableCell>{task.assignedTo}</TableCell>
                        <TableCell>{task.dateToFinish}</TableCell>
                        <TableCell className="text-right">
                            <Badge
                                className="responsive-badge"
                                variant={task.status === 'Terminé' ? 'termine' : task.status === 'En cours' ? 'enCours' : 'aFaire'}
                            >
                                {task.status}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TaskTable;
