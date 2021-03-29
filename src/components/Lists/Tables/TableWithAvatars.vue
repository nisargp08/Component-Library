<template>
  <!-- Table with avatars and multi-line content -->
  <div>
    <div class="w-100 flex justify-end">
      <div>
        <div class="search-group">
          <div class="search-icon">
            <svg
              class="w-4 h-4 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            placeholder="Search"
            name="search"
            v-model="searchQuery"
            id="search"
          />
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Role</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in filteredData()" :key="index">
            <td>
              <div class="flex items-center">
                <div class="avatar">
                  <img :src="resolveImagePath(record.photoUrl)" alt="" />
                </div>
                <div class="ml-4">
                  <p class="text">{{ record.name }}</p>
                  <p class="description">{{ record.email }}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="text">{{ record.title }}</p>
              <p class="description">{{ record.organization }}</p>
            </td>
            <td>
              <span class="status-tag" :class="record.status">{{
                record.status
              }}</span>
            </td>
            <td>
              <p class="description">{{ record.role }}</p>
            </td>
            <td>
              <a href="#" class="link">Edit</a>
            </td>
          </tr>
          <tr v-if="searchQuery && filteredLength <= 0">
            <td class="text-center description" colspan="5">🤯 No Results Found !</td>
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
      searchQuery: "",
      filteredLength : "",
      tableData: [
        {
          name: "Erwin Smith",
          email: "OG_gambler@surveycorps.com",
          title: "Commander",
          organization: "Survey Corps",
          status: "active",
          role: "Master Admin",
          photoUrl: "erwin-smith.png",
        },
        {
          name: "Zeke Yeager",
          email: "wonderkid@eldia.com",
          title: "War chief",
          organization: "Marley",
          status: "inactive",
          role: "Master Admin",
          photoUrl: "zeke-yeager.jpg",
        },
        {
          name: "Reiner Braun",
          email: "letmedieinpiece@eldia.com",
          title: "Armoured Titan",
          organization: "Marley",
          status: "active",
          role: "Admin",
          photoUrl: "reiner-braun.jpg",
        },
        {
          name: "Eren Yeager",
          email: "freedomsupplier@eren.com",
          title: "Fouding + Attack + Warhammer Titan",
          organization: "Eldia",
          status: "active",
          role: "Master Admin",
          photoUrl: "eren-yeager.jpg",
        },
        {
          name: "Sasha Braus",
          email: "givemefood@paradis.com",
          title: "Food Taster",
          organization: "Eldia",
          status: "inactive",
          role: "Member",
          photoUrl: "sasha-braus.jpg",
        },
        {
          name: "Levi Ackerman",
          email: "strongestman@surveycorps.com",
          title: "The Annihilator",
          organization: "Eldia",
          status: "active",
          role: "Admin",
          photoUrl: "levi-ackerman.png",
        },
        {
          name: "Eren Kruger",
          email: "fukuro@eldia.com",
          title: "The OG Undercover",
          organization: "Eldia",
          status: "inactive",
          role: "Admin",
          photoUrl: "eren-kruger.png",
        },
      ],
    };
  },
  methods: {
    resolveImagePath(url) {
      return require(`@/assets/images/${url}`);
    },
    // To filter through object data based on search string
    filteredData() {
      if (this.searchQuery) {
        let result = [];
        // Iterate through object
        this.tableData.forEach((record) => {
          // Iterate through keys to find the search string
          Object.keys(record).forEach((item) => {
            // Lowercase,trim and compare
            if (
              record[item]
                .toLowerCase()
                .trim()
                .includes(this.searchQuery.toLowerCase().trim())
            ) {
              // Return if includes
              result.push(record);
            }
          });
        });
        // Remove duplicates
        let uniqueResult = [...new Set(result)];
        // Update length
        this.filteredLength = uniqueResult.length;
        // Return unique result
        return uniqueResult;
      } else { 
        // Return the object as it is when search string is empty
        return this.tableData;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$action-color: $theme-color;
$active-action-color: white;
$table-shadow: $shadow;

// Utilities
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.justify-end {
  justify-content: flex-end;
}
.items-center {
  align-items: center;
}
.text-center{
  text-align : center;
}
.ml-4 {
  margin-left: 1rem;
}
.w-3 {
  width: 0.75rem;
}

.h-3 {
  height: 0.75rem;
}
// Component css
.search-group {
  position: relative;
  //Search icon
  .search-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding-left: 0.75rem;
  }

  //   Search bar
  input[type="search"] {
    display: block;
    width: 100%;
    padding: 0.375rem;
    padding-left: 2.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 0.5rem;
    border: 1px solid $text-gray-300;
    background-clip: padding-box;
    transition: box-shadow 0.15s ease-in-out;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    -webkit-box-sizing: border-box;
    /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;
    /* Firefox, other Gecko */
    box-sizing: border-box;
    /* Opera/IE 8+ */

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.15rem
        rgba($color: rgba($action-color, 1), $alpha: 0.3);
      border: 1px solid $action-color;
    }
  }
}
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
  border-collapse: collapse;
  > * + * {
    border-top: 1px solid $text-gray-200;
  }
  // Default tags
  thead {
    background-color: rgb(249, 250, 251);
  }
  tbody {
    background-color: white;
    > * + * {
      border-top: 1px solid $text-gray-200;
    }
    tr:hover {
      background-color: $text-gray-50;
    }
  }
  tfoot {
    td {
      padding: 0;
    }
  }
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
  td {
    padding: 1rem 1.5rem;
    white-space: nowrap;
  }
  // Custom tags
  .avatar {
    height: 2.5rem;
    width: 2.5rem;
    flex-shrink: 0;

    img {
      height: 2.5rem;
      width: 2.5rem;
      object-fit: cover;
      border-radius: 9999px;
    }
  }

  .text {
    font-size: 0.875rem;
    color: $text-gray-900;
    font-weight: 500;
  }

  .description {
    font-size: 0.875rem;
    color: $text-gray-500;
  }

  .status-tag {
    font-size: 0.75rem;
    display: inline-flex;
    font-weight: 600;
    text-transform: capitalize;
    border-radius: 9999px;
    padding: 0 0.5rem;
    line-height: 1.25rem;

    &.active {
      background-color: rgb(209, 250, 229);
      color: rgb(6, 95, 70);
    }

    &.inactive {
      background-color: #fee2e2;
      color: #991b1b;
    }
  }

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
