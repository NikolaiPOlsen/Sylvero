import { useState } from 'react';
import { searchTrelloCardByPhone, TrelloCard } from '@/src/services/Suppliers/trello-service';

export const useSearchCustomer = () => {
    const [results, setResults] = useState<TrelloCard[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchByPhone = async (phone: string) => {
        setIsLoading(true);
        try {
            const cards = await searchTrelloCardByPhone(phone);
            setResults(cards ?? []);
        } catch (error) {
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    return { results, isLoading, searchByPhone };
};
