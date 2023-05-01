<script>
    import { page } from "$app/stores";
    const cid = $page.params.club;

    export let data;
    let { clubs,registrations,events,advisors } = data;
    $: ({ clubs,registrations,events,advisors } = data);
    // console.log(registrations.length);
    // console.log(clubs.length);

    const findRegLink = (/** @type {any} */ cid) => {
        for (let i = 0; i < registrations.length; i++) {
            if (registrations[i].club_id === cid) {
                return registrations[i].registration_link;
            }
        }
    };

    const getEvents = (/** @type {any} */ cid) => {
        let eventsArr = [];
        for (let i = 0; i < events.length; i++) {
            if (events[i].club_id === cid) {
                eventsArr.push(events[i]);
            }
        }
        return eventsArr;
    };
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

    /* .acc-but {
        height: 20%;
        width: 40%;
    } */
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
                <table>
                    <tr>
                        <th class="thcl">Event Name</th>
                        <th class="thcl">Event Date</th>
                        <th class="thcl">Event Time</th>
                        <th class="thcl">Event Location</th>
                        <th class="thcl">Registration Deadline</th>
                    </tr>
                    {#each getEvents(cl.club_id) as ev}
                        <tr>
                            <td>{ev.event_name}</td>
                            <td>{ev.event_date}</td>
                            <td>{ev.event_time}</td>
                            <td>{ev.event_location}</td>
                            <td class="ref-ded">{ev.registration_deadline}</td>
                        </tr>
                    {/each}
                </table>
            </div>
        {/if}
    {/each}
</ul>