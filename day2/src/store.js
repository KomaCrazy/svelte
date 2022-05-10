import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const dataid = derived(apiData, ($apiData1) => {
  if ($apiData1){
    return $apiData1.map(user => user.id),$apiData1.map(user => user.user);
  }
  return [];
});


