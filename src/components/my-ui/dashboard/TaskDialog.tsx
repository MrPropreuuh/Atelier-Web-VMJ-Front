import * as React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import TaskTable from './TaskTable';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Task {
    priorite: string;
    name: string;
    assignedTo: string;
    dateToFinish: string;
    status: 'Terminé' | 'En cours' | 'A faire';
}

interface TaskDialogProps {
    tasks: Task[];
    onStatusChange: (index: number, status: 'Terminé' | 'En cours' | 'A faire') => void;
}

const TaskDialog: React.FC<TaskDialogProps> = ({ tasks, onStatusChange }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='flex flex-row gap-1 justify-between'>
                    <span>Voir Tout</span>
                    <ArrowUpRight className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle>Liste des Tâches</DialogTitle>
                    <DialogDescription>
                        Liste complete des taches a effectuer.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <ScrollArea className="h-96 w-full rounded-md border">
                        <div className="p-4">
                            <TaskTable tasks={tasks} onStatusChange={onStatusChange} />
                        </div>
                    </ScrollArea>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default TaskDialog;
