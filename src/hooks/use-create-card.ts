import { createTrelloCard } from '@/src/services/Suppliers/trello-service';
import Toast from 'react-native-toast-message';

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
                desc: `Problem: ${problem}\nPris: ${pris}\n Dato: ${new Date().toLocaleDateString()}`,
                idList: listId,
            });
            console.log('Card created:', newCard);
            Toast.show({
                type: 'success',
                text1: 'Kort opprettet',
                text2: 'Kortet ble opprettet i Trello'
            });
            return true;
        } catch (error) {
            console.error('Feil ved opprettelse av kort:', error);
            Toast.show({
                type: 'error',
                text1: 'Feil ved opprettelse av kort',
                text2: 'Prøv igjen senere'
            });
            return false;
        }
    };

    return { handleCreateCard };
};