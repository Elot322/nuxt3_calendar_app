import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export interface Events {
  month: string,
  days: Days[]
}

interface Days {
  day: number
  list: List[]
}

export interface List {
  id: string,
  title: string,
  description: string,
}

export const useEventsStore = defineStore({
  id: 'events-store',
  state: () => {
    return {
      events: [] as Events[]
    }
  },
  actions: {
    addEvent(monthInput: string, dayInput: number, title: string, description: string) {
      const existItems = this.events.find(event => event.month === monthInput && event.days.some(day => day.day === dayInput))
      if (existItems) {
        existItems.days[0].list.push({ id: uuid(), title, description })
      } else {
        this.events.push({
          month: monthInput,
          days: [{
            day: dayInput,
            list: [{
              id: uuid(),
              title: title,
              description: description
            }]
          }]
        });
      }
    },

    deleteEventById(id: string) {
      const eventIndex = this.events.findIndex(event => event.days.some(day => day.list.some(item => item.id === id)));
      
      if (eventIndex >= 0) {
        const event = this.events[eventIndex];
        const dayIndex = event.days.findIndex(day => day.list.some(item => item.id === id));
        if (dayIndex >= 0) {
          const day = event.days[dayIndex];
          const itemIndex = day.list.findIndex(item => item.id === id);
          if (itemIndex >= 0) {
            day.list.splice(itemIndex, 1);
            if (day.list.length === 0) {
              event.days.splice(dayIndex, 1);
            }
            if (event.days.length === 0) {
              this.events.splice(eventIndex, 1);
            }
          }
        }
      }
    },

  },
  getters: {
    getEvents: state => state.events,
    getEventById(): (id: string) => List | undefined {
      return (id: string) => {
        for (const event of this.events) {
          for (const day of event.days) {
            const item = day.list.find(item => item.id === id)
            if (item) {
              return item
            }
          }
        }
        return undefined
      }
    },
    getEventsByMonthAndDay(): (monthInput: string, dayInput: number) => List[] | undefined {
      return (monthInput: string, dayInput: number) =>
        this.events.find(event => event.month === monthInput && event.days.find(day => day.day === dayInput))?.days[0].list;
    },
  }
})