<script lang="ts">
	import { supabase } from "$lib/supabaseClient";

    export let data;
    // let { category } = data;
    // $: ({ category } = data);
    let { event } = data;
    $: ({ event } = data);

    let { deleted_event } = data;
    $: ({ deleted_event } = data);

</script>

<style>
    .h4class {
        text-align: center;
    }
</style>

<main>
    <!-- <h4 style="center">Live Events</h4> -->
    <h4 class="h4class">Live Events</h4> 
    <ul>
        {#each event as ev}
            <article>
                <p><strong>{ev.event_name}</strong> , {ev.event_date} , {ev.event_time} , {ev.event_location}</p>
                <p> Registration Deadline: {ev.registration_deadline}</p>
            </article>
        {/each}
    </ul>
    <h4 class="h4class">Deleted Events</h4>
    <ul>
        {#each deleted_event as ev}
        <article>
            <p><strong>{ev.event_name}</strong> , {ev.event_date} , {ev.event_time} , {ev.event_location}</p>
            <p> Registration Deadline: {ev.registration_deadline}</p>
        </article>
        {/each}
    </ul>
</main>;