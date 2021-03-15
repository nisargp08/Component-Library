<template>
  <!-- Form with a sidebar -->
  <div>
    <div class="form-layout">
      <div class="grid-col-8">
        <div class="col-span-2">
          <div class="vertical-navigation">
            <a class="nav-links active" href="#">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="ml-3">Account</span>
              </div>
              <div></div>
            </a>
            <a class="nav-links" href="#">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                <span class="ml-3">Password</span>
              </div>
            </a>
            <a class="nav-links" href="#">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span class="ml-3">Plan & Billing</span>
              </div>
            </a>
            <a class="nav-links" href="#">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="ml-3">Team</span>
              </div>
            </a>
            <a class="nav-links" href="#">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                  />
                </svg>
                <span class="ml-3">Integrations</span>
              </div>
            </a>
          </div>
        </div>
        <div class="col-span-6 grid gap-6">
          <!-- Section grid -->
          <form action="#">
            <div class="form-section form-card">
              <div class="section-row">
                <div class="col-span-3 px-4-md-only">
                  <h3 class="section-title">Profile</h3>
                  <p class="section-description">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>
                <div class="col-span-3">
                  <div class="form-fields">
                    <div class="form-row grid-col-3">
                      <div class="col-span-2">
                        <label for="sf-username">Username</label>
                        <div class="input-wrapper">
                          <span class="prefix">paradise.com/</span>
                          <input
                            type="text"
                            id="sf-username"
                            placeholder="theOwl"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <label for="sf-about">About</label>
                      <div class="input-wrapper">
                        <textarea
                          name="about"
                          id="sf-about"
                          rows="5"
                          cols="3"
                          placeholder="you@example.com"
                        ></textarea>
                      </div>
                      <p class="description">
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </p>
                    </div>
                    <div class="form-row">
                      <label for="sf-profilePhoto">Photo</label>
                      <div class="input-wrapper items-center">
                        <span class="photo-display">
                          <svg
                            class="text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                            ></path>
                          </svg>
                        </span>
                        <div class="ml-5">
                          <input
                            type="file"
                            id="sf-profilePhoto"
                            class="sr-only"
                          />
                          <label for="sf-profilePhoto" class="btn" id="photo"
                            >Change</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <label for="sf-coverPhoto">Cover Photo</label>
                      <div class="input-wrapper">
                        <div class="upload-field">
                          <svg
                            class="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <div class="flex items-center">
                            <label for="sf-coverPhoto" class="file-label">
                              <span>Upload a file</span>
                              <input
                                type="file"
                                class="sr-only"
                                id="sf-coverPhoto"
                              />
                            </label>
                            <p class="ml-1">or drag and drop</p>
                          </div>
                          <p class="description">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-action">
                <button class="btn btn-theme">Save</button>
              </div>
            </div>
          </form>
          <!-- Section grid -->
          <form action="#">
            <div class="form-section form-card">
              <div class="section-row">
                <div class="col-span-3 px-4-md-only">
                  <h3 class="section-title">Personal Information</h3>
                  <p class="section-description">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
                <div class="col-span-3">
                  <div class="form-fields">
                    <div class="form-row grid-col-6">
                      <div class="col-span-3">
                        <label for="sf-firstname">First name</label>
                        <div class="input-wrapper">
                          <input type="text" id="sf-firstname" />
                        </div>
                      </div>
                      <div class="col-span-3">
                        <label for="sf-lastname">Last name</label>
                        <div class="input-wrapper">
                          <input type="text" id="sf-lastname" />
                        </div>
                      </div>
                      <div class="col-span-4">
                        <label for="sf-email">Email address</label>
                        <div class="input-wrapper">
                          <input type="email" id="sf-email" />
                        </div>
                      </div>
                      <div class="col-span-3">
                        <label for="sf-country">Country / Region</label>
                        <div class="input-wrapper">
                          <select name="country" id="sf-country">
                            <option selected disabled hidden value=""
                              >-- Please select --</option
                            >
                            <option value="PAR">Paradis</option>
                            <option value="MAR">Marley</option>
                            <option value="HIZ">Hizuru</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-span-6">
                        <label for="sf-address">Street address</label>
                        <div class="input-wrapper">
                          <input type="text" id="sf-address" />
                        </div>
                      </div>
                      <div class="col-span-2">
                        <label for="sf-city">City</label>
                        <div class="input-wrapper">
                          <input type="text" id="sf-city" />
                        </div>
                      </div>
                      <div class="col-span-2">
                        <label for="sf-state">State / Province</label>
                        <div class="input-wrapper">
                          <input type="text" id="sf-state" />
                        </div>
                      </div>
                      <div class="col-span-2">
                        <label for="sf-zipcode">ZIP / Postal</label>
                        <div class="input-wrapper">
                          <input type="text" id="sf-zipcode" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-action">
                <button class="btn btn-theme">Save</button>
              </div>
            </div>
          </form>
          <!-- Section grid -->
          <form action="#">
            <div class="form-section form-card">
              <div class="section-row">
                <div class="col-span-3 px-4-md-only">
                  <h3 class="section-title">Notifications</h3>
                  <p class="section-description">
                    Decide which communications you'd like to receive and how.
                  </p>
                </div>
                <div class="col-span-3">
                  <div class="form-fields">
                    <fieldset>
                      <legend>By Email</legend>
                      <div class="space-y-4">
                        <div class="flex">
                          <div class="flex items-center h-5">
                            <input
                              type="checkbox"
                              name="comments"
                              id="sf-comments"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="sf-comments">Comments</label>
                            <p class="text-gray-500">
                              Get notified when someones posts a comment on a
                              posting.
                            </p>
                          </div>
                        </div>
                        <div class="flex">
                          <div class="flex items-center h-5">
                            <input
                              type="checkbox"
                              name="candidates"
                              id="sf-candidates"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="sf-candidates">Candidates</label>
                            <p class="text-gray-500">
                              Get notified when a candidate applies for a job.
                            </p>
                          </div>
                        </div>
                        <div class="flex">
                          <div class="flex items-center h-5">
                            <input
                              type="checkbox"
                              name="offers"
                              id="sf-offers"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="sf-offers">Offers</label>
                            <p class="text-gray-500">
                              Get notified when a candidate accepts or rejects
                              an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <div class="text-sm">
                        <legend>Push Notifications</legend>
                        <p class="text-gray-500 text-weight-500">
                          These are delivered via SMS to your mobile phone.
                        </p>
                      </div>
                      <div class="mt-6 space-y-4">
                        <div class="flex">
                          <div class="flex items-center h-5">
                            <input
                              type="radio"
                              name="push_notification"
                              id="sf-everything"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="sf-everything">Everything</label>
                          </div>
                        </div>
                        <div class="flex">
                          <div class="flex items-center h-5">
                            <input
                              type="radio"
                              name="push_notification"
                              id="sf-sameAsEmail"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="sf-sameAsEmail">Same as email</label>
                          </div>
                        </div>
                        <div class="flex">
                          <div class="flex items-center h-5">
                            <input
                              type="radio"
                              name="push_notification"
                              id="sf-noPushNotifications"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="sf-noPushNotifications"
                              >No push notifications</label
                            >
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div class="form-action">
                <button class="btn btn-theme">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Variables
$form-max-width: 80rem;
$card-bg: white;
$focus-ring-color: $theme-color;
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-md: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// Vertical navigation
$font-color: $text-gray-900;
$active-bg-color: lighten($theme-color, 30%);
$active-font-color: $theme-color;

// Utilities
.text-gray-300 {
  color: $text-gray-300;
}

.text-gray-400 {
  color: $text-gray-400;
}

.text-gray-500 {
  color: $text-gray-500;
}

// Width
.w-6 {
  width: 1.5rem;
}

.w-12 {
  width: 3rem;
}

// Height
.h-5 {
  height: 1.25rem;
}

.h-12 {
  height: 3rem;
}

.h-6 {
  height: 1.5rem;
}

// Margin
.ml-1 {
  margin-left: 0.25rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.ml-5 {
  margin-left: 1.25rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.space-y-4 {
  > * {
    margin-top: 1rem;
  }
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

// Padding
.px-4-md-only {
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
}

// Font
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-weight-500 {
  font-weight: 500;
}

// Flex
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

// grid
.grid {
  display: grid;
}

.gap-6 {
  gap: 1.5rem;
}

// Component css
.form-layout {
  max-width: $form-max-width;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 2rem;
  }

  // Containers
  .form-section:not(:first-of-type) {
    margin-top: 2rem;
  }

  .section-row {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  .col-span-1 {
    grid-column: 1 / -1;

    @media (min-width: 768px) {
      grid-column: span 1 / span 1;
    }
  }

  .col-span-2 {
    grid-column: 1 / -1;

    @media (min-width: 768px) {
      grid-column: span 2 / span 2;
    }
  }

  .col-span-3 {
    grid-column: 1 / -1;

    @media (min-width: 768px) {
      grid-column: span 3 / span 3;
    }
  }

  .col-span-4 {
    grid-column: 1 / -1;

    @media (min-width: 768px) {
      grid-column: span 4 / span 4;
    }
  }

  .col-span-6 {
    grid-column: 1 / -1;

    @media (min-width: 768px) {
      grid-column: span 6 / span 6;
    }
  }

  .col-span-8 {
    grid-column: 1 / -1;

    @media (min-width: 768px) {
      grid-column: span 8 / span 8;
    }
  }

  .section-title {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 600;
    color: $text-gray-900;

    @media (min-width: 640px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }

  .section-description {
    color: $text-gray-600;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    margin-top: 0.25rem;
  }

  .form-card {
    width: 100%;
    box-shadow: $shadow-md;
    background-color: $card-bg;
    // padding-top: 1.5rem;
    // padding-bottom: 1.5rem;

    @media (min-width: 768px) {
      // padding-left: 2rem;
      // padding-right: 2rem;
      border-radius: 0.375rem;
    }
  }

  .form-fields {
    padding: 1.25rem 1rem;

    > :not(:first-child) {
      margin-top: 1.5rem;
    }

    @media (min-width: 768px) {
      padding: 0;
    }
  }

  .form-action {
    background-color: $text-gray-50;
    padding: 0.75rem 1rem;
    text-align: right;

    @media (min-width: 640px) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    @media (min-width: 768px) {
      border-bottom-left-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;
    }
  }

  .grid-col-3 {
    display: grid;
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .grid-col-6 {
    display: grid;
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
  }

  .grid-col-8 {
    display: grid;
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
  }

  // Form elements
  .input-wrapper {
    display: flex;
    margin-top: 0.25rem;
    border-radius: 0.375rem;
  }

  label {
    color: $text-gray-700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    display: block;
  }

  .description {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: $text-gray-500;
    font-weight: 500;
  }

  .prefix {
    color: $text-gray-500;
    display: inline-flex;
    align-items: center;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    border: 1px solid $text-gray-300;
    border-right-width: 0;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
    background-color: $text-gray-50;

    + input {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }
  }

  [type="text"],
  [type="email"],
  select,
  textarea {
    display: block;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 100%;
    flex: 1 1 0%;
    padding: 0.5rem 0.75rem;
    font-weight: 500;
    border-radius: 0.375rem;
    border: 1px solid $text-gray-300;
    background-clip: padding-box;
    transition: box-shadow 0.15s ease-in-out;
    box-shadow: $shadow-sm;

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
      box-shadow: 0 0 0 0.1rem
        rgba($color: rgba($focus-ring-color, 1), $alpha: 1);
    }
  }

  [type="checkbox"],
  [type="radio"] {
    // Simple resets
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    color-adjust: exact;
    -webkit-print-color-adjust: exact;

    display: inline-block;
    padding: 0;
    vertical-align: middle;
    background-origin: border-box;

    flex-shrink: 0;
    height: 1rem;
    width: 1rem;
    color: #2563eb;
    background-color: #fff;
    border: 1px solid #6b7280;

    // Checked state
    &:checked {
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;

      &:hover,
      &:focus {
        border-color: transparent;
        background-color: currentColor;
      }
    }

    // Focused state
    &:focus {
      outline: 2px solid transparent;
      --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: currentColor;
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
        var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
        calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
        var(--tw-shadow, 0 0 #0000);
    }
  }

  [type="checkbox"] {
    // Applying style
    border-radius: 0.25rem;
    border-color: $text-gray-300;
    color: $focus-ring-color;

    // Checked state
    &:checked {
      background-image: url("../../../assets/images/white-check.svg");
    }
  }

  [type="radio"] {
    // Applying style
    border-radius: 100%;
    border-color: $text-gray-300;
    color: $focus-ring-color;

    // Checked state
    &:checked {
      background-image: url("../../../assets/images/white-radio.svg");
    }
  }

  select {
    width: 100%;
    padding-right: 2.25rem;
    background-color: #fff;
    background-image: url("../../../assets/images/chevron-down.svg");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 20px;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
  }

  legend {
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0;
    font-weight: 600;
    color: $text-gray-900;
  }

  .photo-display {
    display: inline-block;
    height: 3rem;
    width: 3rem;
    border-radius: 9999px;
    background-color: $text-gray-100;
    overflow: hidden;
  }

  .upload-field {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.25rem 1.5rem 1.5rem 1.5rem;
    margin-top: 0.25rem;
    border: 2px dashed $text-gray-300;
    border-radius: 0.375rem;

    > * {
      margin-top: 0.25rem;
    }
  }

  .file-label {
    position: relative;
    cursor: pointer;
    background-color: white;
    border-radius: 0.375rem;
    color: $focus-ring-color;

    &:hover {
      color: darken($color: $focus-ring-color, $amount: 10);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.1rem
        rgba($color: rgba($focus-ring-color, 1), $alpha: 1);
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
}

.vertical-navigation {
  display: flex;
  flex-direction: column;
  width: 100%;
  // max-width: 16rem;

  .nav-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 600;
    color: $font-color;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-top: 0.25rem;
    transition: all 0.15s ease-in-out;

    // Active state
    &.active {
      background-color: $active-bg-color;
      color: $active-font-color;
      font-weight: 700;

      svg {
        color: currentColor;
      }
    }

    // Hover State
    &:hover {
      background-color: $active-bg-color;
    }
  }
}
</style>
