<template>
  <!-- Simple Striped table -->
  <div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in tableData" :key="index">
            <th>{{ record.name }}</th>
            <td>{{ record.title }}</td>
            <td>{{ record.email }}</td>
            <td>{{ record.role }}</td>
            <td><a href="#" class="link">Edit</a></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5">
              <div class="pagination">
                <div class="pagination-stats">
                  <p>Showing <b>1</b> to <b>10</b> of <b>97</b> results</p>
                </div>
                <ul class="pagination-buttons">
                  <li>
                    <a class="page-link" href="#">
                      <svg
                        class="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </a>
                  </li>
                  <li><a class="page-link" href="#">1</a></li>
                  <li><a class="page-link" href="#">2</a></li>
                  <li><a class="page-link" href="#">3</a></li>
                  <li class="active"><a class="page-link" href="#">4</a></li>
                  <li><a class="page-link" href="#">5</a></li>
                  <li><a class="page-link" href="#">6</a></li>
                  <li><a class="page-link" href="#">7</a></li>
                  <li>
                    <a class="page-link" href="#">
                      <svg
                        class="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "Erwin Smith",
          email: "OG_gambler@surveycorps.com",
          title: "Commander",
          role: "Master Admin",
        },
        {
          name: "Zeke Yeager",
          email: "wonderkid@eldia.com",
          title: "War chief",
          role: "Master Admin",
        },
        {
          name: "Reiner Braun",
          email: "letmedieinpiece@eldia.com",
          title: "Armoured Titan",
          role: "Admin",
        },
        {
          name: "Eren Yeager",
          email: "freedomsupplier@eren.com",
          title: "Fouding + Attack + Warhammer Titan",
          role: "Master Admin",
        },
        {
          name: "Sasha Braus",
          email: "givemefood@paradis.com",
          title: "Food Taster",
          role: "Member",
        },
        {
          name: "Levi Ackerman",
          email: "strongestman@surveycorps.com",
          title: "The Annihilator",
          role: "Admin",
        },
        {
          name: "Eren Kruger",
          email: "fukuro@eldia.com",
          title: "The OG Undercover",
          role: "Admin",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$action-color: $theme-color;
$active-action-color: white;
$table-shadow: $shadow;

// Utilities
.w-3 {
  width: 0.75rem;
}

.h-3 {
  height: 0.75rem;
}
// Table
.table-responsive {
  overflow-x: auto;
  width: 100%;
  display: block;
  box-shadow: $table-shadow;
  border-bottom: 1px solid $text-gray-200;
  @media (min-width: 640px) {
    border-radius: 0.5rem;
  }
}
.table {
  width: 100%;
  max-width: 100%;
  font-family: $ternaryFont;
  border-collapse: collapse;
  > * + * {
    border-top: 1px solid $text-gray-200;
  }
  // Default tags
  thead {
    background-color: rgb(249, 250, 251);
    th {
      font-size: 0.75rem;
      line-height: 1rem;
      text-transform: uppercase;
      font-weight: 500;
      color: $text-gray-500;
      letter-spacing: 0.05em;
      text-align: left;
      padding: 0.75rem 1.5rem;
      white-space: nowrap;
    }
  }
  tbody {
    background-color: white;
    > * + * {
      border-top: 1px solid $text-gray-200;
    }
    tr:hover{
      background-color: $text-gray-50;
    }
  }
  tfoot {
    td {
      padding: 0;
    }
  }
  th {
    font-weight: 600;
    font-size: 0.875rem;
    color: $text-gray-900;
    padding: 1rem 1.5rem;
    white-space: nowrap;
    text-align: left;
  }
  td {
    padding: 1rem 1.5rem;
    white-space: nowrap;
    font-size: 0.875rem;
    color: $text-gray-500;
  }
  // Custom tags
  .link {
    display: block;
    // text-align : right;
    color: $action-color;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    &:hover {
      color: darken($color: $action-color, $amount: 10);
    }
  }
}
.table-striped {
  tbody tr:nth-of-type(even) {
    background-color: $text-gray-50;
  }
}
// Pagination
.pagination {
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 100%;
  align-self: flex-end;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  border-radius: 0 0 0.375rem 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25;
  background-color: white;
  color: $text-gray-900;

  .pagination-buttons {
    display: flex;
    list-style: none;
    padding-left: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: $text-gray-900;

    > * {
      border-width: 1px 0 1px 1px;
      border-style: solid;
      border-color: $text-gray-200;
      display: none; //When the list is too big to display in mobile
      @media (min-width: 640px) {
        display: block;
      }
      &.active {
        background: $action-color;
        color: $active-action-color;
        border-color: $action-color;
        display: block;

        &:hover {
          background: $action-color;
          color: $active-action-color;
        }
      }

      &:first-child {
        display: block;
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
      }

      &:last-child {
        display: block;
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
        border-right: 1px solid $text-gray-200;
      }

      &:hover {
        background-color: $text-gray-100;
      }
    }

    .page-link {
      // font-size: 1rem;
      display: block;
      padding: 0.5rem 1rem;
      text-align: center;
    }
  }
}
</style>
