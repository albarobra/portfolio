# Language System Setup

This portfolio website now supports both Japanese (default) and English languages.

## Features

- **Default Language**: Japanese (日本語)
- **Language Switcher**: Located in the top-right corner of the navbar
- **Persistent Storage**: Language preference is saved in localStorage
- **Complete Translation**: All text content is translated including navigation, hero section, about, services, projects, experience, and contact forms

## How It Works

### 1. Language Context
The `LanguageContext` manages the current language state and provides translation functions to all components.

### 2. Translation Files
- `src/locales/ja.json` - Japanese translations
- `src/locales/en.json` - English translations

### 3. Language Switcher
The `LanguageSwitcher` component is positioned in the navbar and allows users to toggle between Japanese and English.

### 4. Component Integration
All components use the `useLanguage()` hook to access translations:
```jsx
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { t } = useLanguage();
  
  return <h1>{t('nav.about')}</h1>;
};
```

## Adding New Translations

### 1. Add to Language Files
Add new translation keys to both `ja.json` and `en.json`:

```json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

### 2. Use in Components
```jsx
const { t } = useLanguage();
return <h2>{t('newSection.title')}</h2>;
```

## Language Switching

Users can switch languages by:
1. Clicking the language switcher button in the navbar
2. The button shows the current language flag and the language code to switch to
3. Language preference is automatically saved and restored on page reload

## Current Translation Coverage

- ✅ Navigation menu
- ✅ Hero section
- ✅ About section
- ✅ Services
- ✅ Technologies
- ✅ Projects
- ✅ Experience timeline
- ✅ Contact form
- ✅ All placeholders and labels

## Technical Details

- **Context Provider**: `LanguageProvider` wraps the entire app
- **Translation Function**: `t(key)` function supports nested keys (e.g., `t('nav.about')`)
- **State Management**: Uses React Context + useState for language state
- **Persistence**: localStorage for user preference
- **Performance**: Translations are loaded once and cached in context
