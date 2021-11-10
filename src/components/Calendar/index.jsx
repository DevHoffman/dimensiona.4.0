import { useState } from 'react'

import FullCalendar, { formatDate } from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid'

function Calendar() {
    formatDate(new Date(), {
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    });
    const [events, setEvents] = useState([]);

    const onEventAdded = (event) => {
        event.title = prompt("Cadastre o nome do evento ")
        setEvents([...events, event])
    }

    const onEventRemove = (event) => {
        /* console.log(event.event._def) */
        let indice = events.findIndex(
            function(item){
                return event.event._def.title === item.title;
            }
        )
        let novosEventos = [...events];
        novosEventos.splice(indice, 1);

        setEvents(novosEventos)
    }

    return(
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            events={events}
            selectable={true}
            eventClick={onEventRemove}
            select={onEventAdded}
            locale={'pt-br'}
        />
    )
}

export default Calendar;