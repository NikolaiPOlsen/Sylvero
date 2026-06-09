import { supabase } from '@/src/utils/supabase';

export type TrelloCard = {
    id: string;
    name: string;
    desc: string;
    idList: string;
    url: string;
};

export const createTrelloCard = async ({ idList, name, desc }: { idList: string; name: string; desc: string }) => {
    const { data, error } = await supabase.functions.invoke('create-trello-card', {
        body: { idList, name, desc },
    });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    return data;
};

export const searchTrelloCardByPhone = async (phone: string) => {
    const { data, error } = await supabase.functions.invoke('search-for-user', {
        body: { phone },
    });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    return data?.cards as TrelloCard[];
};
