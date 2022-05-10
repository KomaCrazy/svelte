import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const profile = derived(apiData, ($apiData1) => {
  if ($apiData1){
    return $apiData1.map(box => box.id);
  }
  return [];
});


