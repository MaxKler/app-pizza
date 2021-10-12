import { useState, useEffect } from 'react';

export const getData = async(
    url,
    method
) => {
    const res = await fetch(url, {
        method: method || 'GET',
        headers: {
            "access-control-allow-origin" : "*",
            'Content-Type': 'application/json;charset=UTF-8'
        },
    }).then((response) => {
        if (response.status === 200) {
           
        }
        return response
    })
    return await res.json()
}

export const getGridHandlers = ( watchHandler, updateHandler, deleteHandler) => {
    return {
        buttons: { 
            watch: (id, course_id) => watchHandler(id, course_id),
            update: (id) => updateHandler(id),
            delete: (id) => deleteHandler(id),
        }
    }
}

export const getFields = () => {
    return {
      fields : [
         {
            name: 'title',
            type: 'input', 
            title: 'Название курса',
            placeholder: 'Введите название курса'
         },
         {
            name: 'position',
            type: 'input', 
            title: 'Позиция',
            placeholder: 'Укажите позицию курса'
         },
          {
            name: 'img',
            type: 'image', 
            title: 'Выберите картинку',
            placeholder: 'картинка'
         },
         {
            name: 'date',
            type: 'date', 
            title: 'Выберите дату курса',
            placeholder: 'Выберите дату'
         },
         {
            name: 'small_description',
            type: 'text-area', 
            title: 'Добавьте краткое описание',
            placeholder: 'Краткое описание'
         },
         {
            name: 'description',
            type: 'text-area', 
            title: 'добавте описание',
            placeholder: 'Описание'
         }
     ] 
    }
 }

 export const getFieldsSubCourses = () => {
    return {
      fields : [
         {
            name: 'title',
            type: 'input', 
            title: 'Название подкурса',
            placeholder: 'введите название курса'
         },
         {
            name: 'open',
            type: 'check', 
            title: 'Бесплатный доступ к уроку',
            placeholder: 'статус'
         },
          {
            name: 'position',
            type: 'input', 
            title: 'Позиция',
            placeholder: 'Укажите позицию подкурса'
         },
          {
            name: 'course_id',
            type: 'input', 
            title: 'Идентификатор курса',
            placeholder: 'id'
         },
          {
            name: 'img',
            type: 'image', 
            title: 'Выберите картинку',
            placeholder: 'картинка'
         },
         {
            name: 'date',
            type: 'date', 
            title: 'Выберите дату курса',
            placeholder: 'Выберите дату'
         },
         {
            name: 'description',
            type: 'text-area', 
            title: 'Добавьте описание',
            placeholder: 'Описание'
         }
     ] 
    }
 }

 export const getFieldsModules = () => {
   return {
     fields : [
        {
           name: 'title',
           type: 'input', 
           title: 'Название модуля (урока)',
           placeholder: 'Введите название урока'
        },
        {
            name: 'open',
            type: 'check', 
            title: 'Бесплатный доступ к уроку',
            placeholder: 'статус'
         },
         {
            name: 'position',
            type: 'input', 
            title: 'Позиция урока',
            placeholder: 'Введите позицию'
         },
        {
           name: 'path',
           type: 'input',
           title: 'Ссылка на видео',
           placeholder: 'Вставить ссылку'
        },
        {
           name: 'description',
           type: 'text-area', 
           title: 'добавте описание',
           placeholder: 'описание'
        }
    ] 
   }
}
// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

