import { createTrelloCard } from '@/providers/trelloService';

export const useCreateCard = () => {
    const handleCreateCard = async (
        listId: string,
        customername: string,
        phonenumber: string,
        problem: string,
        pris: string
    ) => {
        try {
            const newCard = await createTrelloCard({
                name: `${customername} - ${phonenumber}`,
                desc: `Problem: ${problem}\nPris: ${pris}`,
                idList: listId,
            });
            console.log('Card created:', newCard);
            return true;
        } catch (error) {
            console.error('Feil ved opprettelse av kort:', error);
            return false;
        }
    };

    return { handleCreateCard };
};