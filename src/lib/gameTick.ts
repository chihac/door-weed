import { userState } from './store/globalState.svelte';

export default function triggerCPSCookie() {
	userState.cookies += userState.cookiesPerSecond;
}
