import { supabase } from '@/src/utils/supabase';

export const createTrelloCard = async ({ idList, name, desc }: { idList: string; name: string; desc: string }) => {
    const { data, error } = await supabase.functions.invoke('create-trello-card', {
        body: { idList, name, desc },
    });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    return data;
};
