/** @jsxImportSource solid-js */

import {onMount} from "solid-js"
import * as Lume from "lume"


export function LumeDemo(){
	let $Container: HTMLDivElement

	onMount(() => {
		Lume.useDefaultNames()
	})

	return (
		<div ref={$Container} class="Lume Container">
		</div>
	)
}
