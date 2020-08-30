export default class MetrikaServiсe {

    API_KEY = "id=44147844";
    BASE_URL = `https://api-metrika.yandex.net/stat/v1/data`;
  
    getResource = async (type, params) => {
      return fetch(`${this.BASE_URL}?${this.API_KEY}&${type}&limit=10`, {
        ...params,
      }).then((res) => res.json());
    };
  
    getTechPlatforms = () => {
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = this.getResource(`preset=tech_platforms`, params);
      return res;
    };
    getAge = () => {
        const params = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = this.getResource(`preset=age`, params);
        return res;
      };
      getGender = () => {
        const params = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = this.getResource(`preset=gender`, params);
        return res;
      };
  }