# Aplicativo de Loja

## Estrutura de telas do aplicativo

```bash
Main Drawer
├── Index
├── (tabs)
│   ├── Inicio
│   ├── Stack Categorias
│   │   ├── Listagem de categorias
│   │   └── Listagem de produtos de uma categoria
│   └── Sobre Mim
└── Produto Único
```

## Comandos utilizados durante o projeto

```bash
npx create-expo-app --template blank-typescript
cd nome-do-app
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
npx expo start -c
```
