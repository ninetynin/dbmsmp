<script lang="ts">
    import { page } from "$app/stores";
	import { supabase } from "$lib/supabaseClient";
    const cid = $page.params.club;

    export let data;
    let { clubs,registrations,events,advisors } = data;
    $: ({ clubs,registrations,events,advisors } = data);
    // console.log(registrations.length);
    // console.log(clubs.length);

    const findRegLink = (/** @type {any} */ cid: any) => {
        for (let i = 0; i < registrations.length; i++) {
            if (registrations[i].club_id === cid) {
                return registrations[i].registration_link;
            }
        }
    };

    const getEvents = (/** @type {any} */ cid: any) => {
        let eventsArr = [];
        for (let i = 0; i < events.length; i++) {
            if (events[i].club_id === cid) {
                eventsArr.push(events[i]);
            }
        }
        return eventsArr;
    };

    // function Modifycluburl() {
    //     // window.location.href = `/clubs/${cid}/modify`;
    //     window.location.href = `/clubs/${cid}/modify`;
    // } 

    // let editingEvent = null;
    let isEditing = false;

    // /**
	//  * @param {any} event
	//  */
    function enableEdit() {
        // editingEvent = event;
        isEditing = true;
    }


    const updateInput = async (/** @type {any} */ Input: { [x: string]: any; } , InputInput: string) => {
        console.table(Input);
    }

    const saveInput = async(/** @type {any} */ Input: { [x: string]: any; }) => {
        console.table(Input);
        try {
            const { data, error } = await supabase
                .from('event')
                .update({ event_name : Input.event_name })
                .eq('club_id', Input.club_id);
        } catch (error) {
            console.log(error);
        }
        try {
            const { data, error } = await supabase
                .from('event')
                .update({ event_date : Input.event_date })
                .eq('club_id', Input.club_id);
        } catch (error) {
            console.log(error);
        }
        try {
            const { data, error } = await supabase
                .from('event')
                .update({ event_time : Input.event_time })
                .eq('club_id', Input.club_id);
        } catch (error) {
            console.log(error);
        }

        try {
            const { data, error } = await supabase
                .from('event')
                .update({ event_location : Input.event_location })
                .eq('club_id', Input.club_id);
        } catch (error) {
            console.log(error);
        }

        try {
            const { data, error } = await supabase
                .from('event')
                .update({ registration_deadline : Input.registration_deadline })
                .eq('club_id', Input.club_id);
        } catch (error) {
            console.log(error);
        }

        isEditing = false;
    }
</script>

<style>
    .ulc{
        text-align: center;
    }

    .notaccepting
    {
        text-align: center;
        color: crimson;
        font-weight: normal;
    }

    .ref-ded {
        color: crimson;
    }

    .thcl {
        /* color: #1095C1; */
        color: aliceblue;
    }

    #b2s {
        /* make the button smaller*/
        font-size: 80%;
        width: fit-content;
        height: fit-content;
    }

    #b123 {
        margin-top: 10px;
        height: fit-content;
        width: fit-content;
        /* border-color: #10c15a;
        color: #10c15a; */
        border-color: yellow;
        color: yellow;
    }

    #bred {
        margin-top: 10px;
        height: fit-content;
        width: fit-content;
        border-color: crimson;
        color: crimson;
    }

    #crt-butt{
        height: fit-content;
        width: fit-content;
        border-color: #10c15a;
        color: #10c15a;
    }
</style>

<ul class="ulc">
    {#each clubs as cl}
        {#if cl.club_name === cid}
            <h2>{cid}</h2>
            <p class="desc">{cl.club_desc}</p>
            {#if cl.accepting_members}
                <!-- <a href="{findRegLink(cl.club_id)}" role="button">Join the Club</a> -->
                <a href="{findRegLink(cl.club_id)}" role="button" class="outline">Ready for some fun? Join the Club!</a>
            {:else}
                <p class="notaccepting">Not Recruiting Currently</p>
            {/if}
            <div class="events-div">
                <br><br>
                {#if getEvents(cl.club_id).length > 0}
                <table>
                    <tr>
                        <th class="thcl">Event Name</th>
                        <th class="thcl">Event Date</th>
                        <th class="thcl">Event Time</th>
                        <th class="thcl">Event Location</th>
                        <th class="thcl">Registration Deadline</th>
                    </tr>
                    {#each getEvents(cl.club_id) as ev}
                        {#if !isEditing}
                            <tr>
                                <td><input type="text" value="{ev.event_name}" readonly></td>
                                <td><input type="date" id="date" name="date" value="{ev.event_date}" readonly></td>
                                <td><input type="time" id="time" name="time" value="{ev.event_time}" readonly></td>
                                <td><input type="text" value="{ev.event_location}" readonly></td>
                                <td><input type="date" id="date" name="date" value="{ev.registration_deadline}" readonly></td>
                                <a href="#" role="button" class="outline" id="b123" on:click={enableEdit}>Modify</a>
                                <a href="#" role="button" class="outline" id="bred">Delete</a>
                            </tr>
                        {:else}
                            <tr>
                                <td><input type="text" value="{ev.event_name}" on:input={(e)=>{
                                    ev.event_name = e.currentTarget.value;
                                    updateInput(ev,"event_name")
                                }}></td>
                                <td><input type="date" id="date" name="date" value="{ev.event_date}" on:input={(e)=>{
                                    ev.event_date = e.currentTarget.value;
                                    updateInput(ev,"event_date")
                                }}></td>
                                <td><input type="time" id="time" name="time" value="{ev.event_time}" on:input={(e)=>{
                                    ev.event_time = e.currentTarget.value;
                                    updateInput(ev,"event_time")
                                }}></td>
                                <td><input type="text" value="{ev.event_location}" on:input={(e)=>{
                                    ev.event_location = e.currentTarget.value;
                                    updateInput(ev,"event_location")
                                }}></td>
                                <td><input type="date" id="date" name="date" value="{ev.registration_deadline}" on:input={(e)=>{
                                    ev.registration_deadline = e.currentTarget.value;
                                    updateInput(ev,"registration_deadline")
                                }}></td>
                                <a href="#" role="button" class="outline" id="b123" on:click={(e)=>saveInput(ev)}>Save</a>
                                <a href="#" role="button" class="outline" id="bred">Cancel</a>
                            </tr>
                        {/if}
                    {/each}
                </table>
                    <a href="#" role="button" class="outline" id="crt-butt">Create New Event</a>
                {:else}
                    <p class="notaccepting">No Events Scheduled</p>
                {/if}

                <!-- <div class="grid">
                    <p>Want to create an event?</p>
                    <a href="/clubs/{cid}/modify" role="button" class="secondary outline" id="b2s">Create Event</a>
                </div> -->
            </div>
        {/if}
    {/each}
</ul>