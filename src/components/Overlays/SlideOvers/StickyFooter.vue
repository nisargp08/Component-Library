<template>
  <!-- Slide over with a sticky footer -->
  <div>
    <button class="btn" @click="isOpen = true">
      Open Sticky Footer Slide Over
    </button>
    <div class="slide-over" :class="{ 'is-open': isOpen }">
      <div role="button" @click="isOpen = false" class="slide-overlay"></div>
      <transition-slide>
        <div class="slide-over-panel" v-if="isOpen">
          <div class="slide-over-heading">
            <h2>Panel Heading</h2>
            <div class="dismiss">
              <button class="reset-btn" @click="isOpen = false">
                <svg
                  class="w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="slide-over-content">
            <!-- Replace with your content -->
            <div class="content-placeholder">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus rerum perferendis impedit sed voluptas veniam quis
                at enim dolores qui fuga vero laudantium asperiores tempore
                nesciunt adipisci natus consequuntur odio, non mollitia dolor
                obcaecati. Doloremque reiciendis repellat magni animi molestiae
                et quibusdam necessitatibus nisi quas, tempore aspernatur
                dolorem, quod doloribus esse asperiores minus natus nihil
                excepturi. Recusandae quae doloribus esse, qui maxime, porro
                temporibus ullam perspiciatis odit ab facere consequuntur
                architecto natus cum necessitatibus doloremque unde ut autem in
                facilis asperiores harum perferendis inventore molestiae. Rem
                officia veritatis a molestias quo laborum incidunt, eius
                repudiandae maxime, sunt explicabo esse numquam! Fugiat aliquid
                vero eveniet animi nesciunt maxime beatae molestiae veritatis
                voluptate optio molestias accusantium omnis harum vitae ex,
                alias recusandae sint sunt quia. Veniam, et? Assumenda, amet et
                aliquam distinctio, sapiente eos qui doloremque illo nihil ut,
                hic a rem expedita eum quod est vero eius. Voluptates alias modi
                suscipit aspernatur ratione facilis aperiam excepturi obcaecati
                quis ex doloremque minus autem quibusdam qui maxime libero
                laboriosam mollitia, atque quaerat! Provident tempora
                recusandae, accusamus vel corrupti quia labore est numquam
                dolor, aspernatur explicabo officia quas quisquam magnam tenetur
                magni a! Quos minus sunt, illo doloremque deserunt assumenda
                architecto repudiandae adipisci? In cum atque labore iste quae
                corrupti quam deserunt est, consectetur ex eos cumque vero neque
                nesciunt vitae suscipit a tempora molestias esse non unde
                asperiores eveniet reprehenderit pariatur. Magni temporibus,
                fugiat, consequuntur obcaecati animi nobis dicta hic officiis
                autem consequatur nesciunt quibusdam atque cupiditate dolore
                rem, praesentium sunt repudiandae recusandae ipsum molestias
                tenetur exercitationem! Minus inventore libero molestiae eum
                numquam voluptatem ipsam expedita, praesentium commodi debitis
                fuga eligendi suscipit voluptates eos similique voluptate
                deleniti, voluptatum aut necessitatibus illo sapiente incidunt
                nemo aperiam? Est tempore aliquid doloremque odit tenetur
                placeat hic eos fugiat. Placeat a deserunt unde labore dicta
                corrupti eius, autem alias harum maxime deleniti magni omnis
                tenetur vel iste vitae atque iure maiores! Nisi at aut natus
                culpa incidunt neque maxime animi! Maiores molestiae vel
                sapiente repudiandae. Nam necessitatibus officia unde, nulla
                consequatur debitis distinctio. Consectetur reprehenderit nemo
                quo vero exercitationem sint, sed a reiciendis, sequi omnis eos
                laudantium. Illo cum hic harum, excepturi obcaecati delectus at
                nulla neque a aspernatur? Expedita vel minus ea at reiciendis
                alias blanditiis eveniet, laborum ratione eum minima! Doloremque
                sapiente mollitia at ab facere, voluptatum eveniet provident
                natus odio eaque. Quod repellat sit cum magni assumenda, itaque
                eveniet, impedit sapiente esse hic maxime at veniam! Voluptatem
                reiciendis voluptatibus in enim, placeat debitis ex quisquam
                consectetur omnis dolorum, unde cum sequi error vel optio
                pariatur sit accusantium cupiditate saepe nisi. At deleniti
                reprehenderit ad beatae voluptate. Magnam in eius rem autem
                aperiam a necessitatibus vel porro voluptatem minus delectus
                molestias aliquam cumque id fugiat explicabo, itaque eum ipsa
                fugit, quisquam deserunt ducimus! Quibusdam, corporis ipsa
                expedita magnam error natus perferendis dolorem mollitia fuga
                porro pariatur, totam nihil excepturi sit molestiae asperiores
                vero exercitationem. Recusandae nostrum sapiente veritatis ullam
                optio unde, consequatur pariatur dolorum quos, dignissimos
                excepturi at! Aspernatur libero, esse incidunt facere totam
                molestiae?
              </p>
            </div>
          </div>
          <div class="slide-over-footer">
            <div class="actions">
              <button class="btn" @click="isOpen = false">Cancel</button>
              <button class="btn btn-theme" @click="isOpen = false">
                Save
              </button>
            </div>
          </div>
        </div>
      </transition-slide>
    </div>
  </div>
</template>

<script>
import TransitionSlide from "@general/TransitionSlide.vue";

export default {
  mounted() {
    // Modal close on escape key
    window.addEventListener("keyup", (e) => {
      // If escape key
      if (e.code == "Escape") {
        this.isOpen = false;
      }
    });
  },
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    TransitionSlide,
  },
};
</script>

<style lang="scss" scoped>
// Variables
$bg-color: white;
$bg-tint: rgba(0, 0, 0, 0.09);
$shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  0 10px 10px -5px rgba(0, 0, 0, 0.04);
.slide-over {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  justify-content: flex-end;
  &.is-open {
    //   When slide bar opened
    display: flex;
  }
  .slide-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: $bg-tint;
  }

  .slide-over-panel {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 28rem;
    width: calc(100vw - 4rem);
    background-color: $bg-color;
    overflow-y: hidden; //For fixed footer
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    box-shadow: $shadow;
    // height: 100%;
  }
}
// Element design css - Not required for component
.text-gray-400 {
  color: $text-gray-400;
}
.slide-over-heading {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  h2 {
    flex: 1;
    -ms-flex: 1;
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: $text-gray-900;
  }
}
.slide-over-content {
  position: relative;
  margin-top: 1.25rem;
  padding: 1rem;
  flex: 1;
  -ms-flex: 1;
  border-top: 1px solid $text-gray-200;
  overflow-y: auto;
}
.slide-over-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 1rem;
  padding-right: 1rem;
  border-top: 1px solid $text-gray-200;
  .actions {
    margin-top: 1rem;
  }
  .btn-theme {
    margin-left: 0.75rem;
  }
}
// Just a placeholder
.slide-over {
  --animate-duration: 250ms;
}
.content-placeholder {
  p {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: $text-gray-500;
  }
}
</style>
