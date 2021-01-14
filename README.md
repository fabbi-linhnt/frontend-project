# frontend-project
## Style Guide
### Quy tắc mức A
  1. Tên component cần có 2 từ trở lên 
  ```javascript
      Vue.component: ('todo-item', {
        ...
      })
  ```
  ```javascript
      export default: {
        name: 'TodoItem'
      }
  ```

  2. Định nghĩa props càng chi tiết càng tốt ví dụ
  ```javascript
      // Sai
      props: ['status'];  
      // Đúng
      props: { status: String }
  ```
  3. Luôn dùng key với v-for:
  ```javascript
      <ul>
        <li
          v-for="todo in todos"
          :key="todo.id"
        >
          {{ todo.text }}
         </li>
      </ul>
  ```
  4. Tránh dùng v-if trên cùng 1 phần tử với v-for như sau:
  ```javascript
      <ul>
        <li
          v-for="user in users"
          v-if="user.isActive"
          :key="user.id"
        >
          {{ user.name }}
        <li>
      </ul>
  ```
  5. Tất cả các component cần được thiết lập phạm vi cho style như dùng: scoped, BEM ví dụ:
  ```css
      <style scoped>
        .button {
          border: none;
          border-radius: 2px;
        }

        .button--close {
          background-color: red;
        }
      </style>
  ```
  6. Luôn dùng tiền tố $_ cho các private property trong 1 plugin, mixin. Để tránh xung đột cần thêm vào 1 phạm vi được định danh ví dụ: 
  ```javascript
      var myGreatMixin = {
        methods: {
            $_myGreatMixin_update: function () {
          }
        }
      }
  ```
### Quy tắc mức B 
  1. Tên file component cần được dặt tên theo quy tắc PascalCase hoặc kebab-case ví dụ:
  ```
      MyComponent.vue
      my-component.vue
  ```
  2. Tên các component nền tảng (base component) nên bắt đầu bằng tiền tố đặc biệt như: Base, App, V ví dụ:
  ```
      BaseTable.vue
      AppTable.vue
      VTable.vue
  ```
  3. Tên các component dạng single-instance nên bắt đầu bằng The ví dụ:
  ```
      TheHeading.vue
      TheSidebar.vue
  ```
  4. Tên các component con của cùng 1 component cha cần có tiền tố là tên component cha ví dụ:
  ```
      SearchSidebar.vue
      SearchSidebarNavigation.vue
  ```
  5. Tên của các component nên được bắt đầu bằng những từ chung nhất và kết thúc là các từ mô tả ví dụ:
  ```
      SearchButtonClear.vue
      SearchInputQuery.vue
  ```
  6. Các thẻ component không có nội dung nên tự động đóng trong các "single-file component, string template và JSX" - nhưng không tự động đóng trong các "DOM template" ví dụ:
  ```html
      <!-- Trong single-file component, string template, và JSX -->
      <MyComponent/>

      <!-- Trong DOM templates -->
      <my-component></my-component>
  ```
  7. Tên của component là PascalCase trong "single-file component, JS/JSX và string template"  và là kebab-case trong "DOM template"
  ```html
      <!-- Trong single-file component, string template, và JSX -->
      <MyComponent/>

      <!-- Trong DOM templates -->
      <my-component></my-component>
  ```
  8. Tên component cần viết đầy đủ thay vì viết tắt
  + Không nên
  ```
      SdSetting.vue
      UProfopts.vue
  ```
  + Nên dùng
  ```
      StudentDashboardSettings.vue
      UserProfileOptions.vue
  ```
  9. Dùng camelCase khi khai báo prop, kebab-case khi dùng trong template và JSX ví dụ
  ```javascript
      props: {
        greetingText: String
      }
  ```
  ```html
      <WelcomeMessage greeting-text="hi"/>
  ```
  10. Các phần tử có nhiều thuộc tính cần viết thành nhiều dòng, mỗi dòng 1 thuộc tính ví dụ
  ```html
      <img
        src="https://vuejs.org/images/logo.png"
        alt="Vue Logo"
      >
  ```
  11. Template của component chỉ nên chứa những biểu thức đơn giản, những biểu thức phức tạp nên viết thành computed property hoặc method ví dụ
  + Không nên
  ```javascript
      {{
        fullName.split(' ').map(function (word) {
          return word[0].toUpperCase() + word.slice(1)
        }).join(' ')
      }}
  ```
  + Nên dùng
  ```html
      <!-- Trong template -->
      {{ normalizedFullName }}
  ```
  ```javascript
      // Biểu thức phúc tạp đã được chuyển thành một computed property
      computed: {
        normalizedFullName: function () {
          return this.fullName.split(' ').map(function (word) {
            return word[0].toUpperCase() + word.slice(1)
          }).join(' ')
        }
      }
  ```
  12. Các computed property phức tạp nên tách thành nhiều property nhỏ hơn ví dụ:
  ```javascript
      computed: {
        basePrice: function () {
          return this.manufactureCost / (1 - this.profitMargin)
        },
        discount: function () {
          return this.basePrice * (this.discountPercent || 0)
        },
        finalPrice: function () {
          return this.basePrice - this.discount
        }
      }
  ```
  13. Luôn dùng hoặc không bao giờ dùng dạng viết tắt của directive ( : cho v-bind: và @ cho v-on: ) ví dụ
  ```html
      <input
        :value="newTodoText"
        :placeholder="newTodoInstructions"
      >
      <input
        @input="onInput"
        @focus="onFocus"
      >
  ```
  + Hoặc
  ```html
      <input
        v-bind:value="newTodoText"
        v-bind:placeholder="newTodoInstructions"
      >
      <input
        v-on:input="onInput"
        v-on:focus="onFocus"
      >
  ```
### Quy tắc mức C
  1. Cần có dòng trống giữa các property ví dụ:
  ```javascript
      props: {
        value: {
          type: String,
          required: true
        },

        focused: {
          type: Boolean,
          default: false
        },

        label: String,
        icon: String
      },

    computed: {
      formattedValue: function () {
        // ...
      },

      inputClasses: function () {
        // ...
      }
    }
  ```
  2. Single-file component nên sắp xếp các thẻ theo thứ tự: 
  ```
      <template>...</template>
      <script>/*...*/<script>
      <style>/* ... */<style>
  ```
### Quy tắc mức D
  1. Tốt nhất nên dùng key với v-if, v-else-if, v-else nếu các phần tử cùng loại ví dụ
  ```html
      <!-- Sai -->
      <div v-if="error">
        Lỗi: {{ error }}
      </div>
      <div v-else>
        {{ results }}
      </div>

      <!-- Đúng -->
      <div
        v-if="error"
        key="search-status"
      >
        Lỗi: {{ error }}
      </div>
      <div
        v-else
        key="search-results"
      >
        {{ results }}
      </div
  ```
  2. Khi dùng scoped nên tránh selector dạng phần tử nên ưu tiên selector dạng class
  + Không nên
  ```css
      <style scoped>
      button {
        background-color: red;
      }
      </style>
  ```
  + Nên dùng
  ```css
      <style scoped>
      .btn-close {
        background-color: red;
      }
      </style>
  ```
## Guide BEM
### BEM là viết tắt của: Block, Element, Modifier
 1. Block: Là đại diện cho 1 component ví dụ:
 ```html
      <form class="search-form"></form>
 ```
 2. Element: Là 1 phần của block và nó không được sử dụng ngoài block ví dụ:
 ```html
      <!-- Đúng -->
      <form class="search-form">
        <input class="search-form__input">
        <button class="search-form__button">Search</button>
      </form>
      
      <!-- Sai -->
      <form class="search-form">
          <input class="search-form__input">
      </form>
      <button class="search-form__button">Search</button>
 ```
 3. Modifier: Là trạng thái hoặc phát sinh khác của Block/Element. Một class modifier không bao giờ được đứng 1 mình. Tức là nó phải luôn được đi kèm với 1 class block hay element ví dụ:
 ```html
      <button class="button button--small">Button</button>
 ```
