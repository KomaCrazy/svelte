import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const datatable = derived(apiData, ($apiData1) => {
  if ($apiData1){
    return $apiData1;
  }
  return [];
});


