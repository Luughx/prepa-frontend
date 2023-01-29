<template>
    <div v-if="type == `textArea`">
        <textarea
        class="form-control" 
        :class="{ 'is-invalid': errors.length >= 1, 'is-valid': isValidData }"
        :placeholder="label"
        @input="inputHandler"
        v-bind="$attrs"
        :value="$attrs.modelValue"
        >

        </textarea>
    </div>
    <div v-if="type !== `textArea`">
        <input 
        :type="type" 
        class="form-control" 
        :class="{ 'is-invalid': errors.length >= 1, 'is-valid': isValidData }"
        :placeholder="label"
        @input="inputHandler"
        v-bind="$attrs"
        :value="$attrs.modelValue"
        >
    </div>
    <div class="invalid-feedback mb-3">
        <span v-for="(error, index) in errors" :key="`error-${label}-${index}`">
            {{error.$message}}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BaseInput",
    props: {
        label: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: "text"
        },
        errors: {
            type: Array,
            default: () => []
        },
        isValidData: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        inputHandler(e: Event) {
            const target = e.target as HTMLInputElement
            this.$emit("update:modelValue", target.value)
        }
    }
})

</script>

<style>

.input-invalid {
    border: 3px solid #bb2929;
}

.input-valid {
    border: 3px solid #1ed12d;
}
.invalid-feedback {
  display: block;
  font-size: 12px;
}
</style>