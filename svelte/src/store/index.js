import { writable, derived } from "svelte/store";

const input = writable("");
const drivers = writable([]);
const loading = writable(true);
const error = writable(false);

// Methods
// fetchDrivers;
// searchDrivers;

export { input, drivers, loading, error };
