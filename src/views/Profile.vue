<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { useProfileStore } from '@/stores/profile.store';
import type { TypeProfile } from '@/types/profile.type';
import { codeMessage } from '@/utils/codeMessage.util';
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';
import ProfileSkeleton from '@/components/profile/ProfileSkeleton.vue';

// Хранилище
const profileStore = useProfileStore();

//
const isSubmit = ref(false);

// Получение профиля
const profile = ref<TypeProfile | null>(null);
let profileDouble: Partial<TypeProfile | null> = {};

// Получение ключей из типа
type TypeFields = keyof TypeProfile;

const getProfile = async () => {
  try {
    profile.value = await profileStore.getProfile();
    profileDouble = { ...profile.value };
    // console.log(profile.value);
  } catch (error) {
    console.log('Произошла ошибка при получении профиля:', (error as Error).message);
    codeMessage('Произошла ошибка при получении профиля', 'error');
  }
};

// Проверка полей на изменение
const isChangeFields = computed(() => {
  if (profile.value) {
    return Object.keys(profile.value).some((field) => {
      return profile.value![field as TypeFields] !== profileDouble![field as TypeFields];
    });
  }

  return false;
});

//
onMounted(async () => {
  await getProfile();
});

// Изменение данных пользователя
const updateProfile = async () => {
  if (!isChangeFields.value) return;

  isSubmit.value = true;

  try {
    const updateProfile = await profileStore.updateProfile(profile.value!);
    profile.value = updateProfile;
    profileDouble = { ...profile.value };
    codeMessage('Данные профиля успешно обновлены');
  } catch (error) {
    console.log(error);
    codeMessage('Произошла ошибка при обновлении профиля', 'error');
  } finally {
    isSubmit.value = false;
  }
};
</script>

<template>
  <div class="container">
    <div class="profile wrap_section">
      <h1 class="h1">Профиль</h1>

      <!--  -->
      <ProfileSkeleton v-if="!profile" />

      <form v-if="profile" @submit.prevent="updateProfile" class="profile_form">
        <label>
          <span>Имя</span>
          <Input v-model="profile.name" placeholder="Имя" />
        </label>

        <label>
          <span>Почта</span>
          <Input v-model="profile.email" placeholder="Почта" readonly />
        </label>

        <label>
          <span>Адрес</span>
          <Input v-model="profile.address" placeholder="Адрес" />
        </label>

        <Button
          title="Обновить"
          type="submit"
          :loading="isSubmit"
          :disabled="isSubmit || !isChangeFields"
        />
      </form>
    </div>
  </div>
</template>

<style lang="css" scoped>
.profile_form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  /* label */
  label {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
}
</style>
