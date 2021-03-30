<template>
  <!-- Content links with action -->
  <div>
    <div class="stacked-list">
      <div v-for="(record, index) in userList" :key="index" class="py-4">
        <a href="#">
          <div class="flex flex-wrap justify-between gap-2">
            <p class="text flex-1">{{ record.title }}</p>
            <p class="description">{{ record.createdAt }}</p>
          </div>
          <p class="subject">{{ record.subject }}</p>
          <div class="mt-2">
            <p class="description">{{ record.description | trim }}</p>
          </div>
        </a>
      </div>
      <div class="border-none">
        <button class="btn all-btn">View All</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [
        {
          title: "Project Warriors",
          subject: "Who should be the next beast titan ?",
          description: `The Warriors are a special unit of the Marleyan Armed Forces. 
            Its members are the Subjects of Ymir under Marleyan control who are given the power to transform into
            one of the Nine Titans.Their primary objective is to seize the Founding Titan, 
            which they call the "Coordinate," and bring it to Marley.`,
          createdAt: "1d ago",
        },
        {
          title: "Subjects of Ymir",
          subject: "Titan origins",
          description: `The Subjects of Ymir are an ethnic group descended from Ymir Fritz and the only race capable of 
          becoming Titans. They are the majority race of a nation called Eldia, and are often called Eldians
          . Many Subjects of Ymir live on Paradis Island, behind the three Walls; however, outside the Walls, 
          Subjects of Ymir live inside internment zones such as Liberio's.`,
          createdAt: "2d ago",
        },
        {
          title: "57th Exterior Scouting Mission",
          subject: "Who do you think is the enemy ?",
          description: `The 57th Exterior Scouting Mission was a mission undertaken by the Scout Regiment to plot a course from Calaneth 
          District to Shiganshina District. The expedition was sabotaged by the Female Titan and subsequently considered a failure.`,
          createdAt: "5hr ago",
        },
        {
          title: "Raid on Liberio",
          subject: "I will keep moving forward...",
          description: `The Raid on Liberio was a preemptive strike carried out by the Scout Regiment against the Marleyan military during a festival
            hosted by the Tybur family in Liberio. The attack was commenced by Eren Jaeger shortly after Willy Tybur formally declared war on Paradis Island.`,
          createdAt: "15min ago",
        },
      ],
    };
  },
  filters: {
    trim(value) {
      const characterCap = 255;
      if (value.length > characterCap) {
        return value.slice(0, characterCap) + "...";
      }
      return value;
    },
  },
};
</script>
<style lang="scss" scoped>
// Utilities
.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.justify-between {
  justify-content: space-between;
}
.flex-1 {
  flex: 1 1 0%;
}
.gap-2{
    gap: 0.5rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
// Component css
.stacked-list {
  width: 100%;
  > * + * {
    border-top: 1px solid $text-gray-200;
    margin-top: 0.25rem;
    @media (min-width: 640px) {
      margin-top: 0;
    }
  }
  .border-none {
    border-top: none;
  }
  .all-btn {
    width: 100%;
    margin-top: 0.5rem;
  }
  .text {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: $text-gray-900;
    font-weight: 600;
  }
  .subject {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-top: 0.25rem;
    color: $text-gray-500;
    font-weight: 500;
  }
  .description {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: $text-gray-500;
  }
}
</style>
