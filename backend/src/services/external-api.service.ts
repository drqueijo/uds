import axios, { AxiosInstance } from "axios";

class ExternalApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.EXTERNAL_API_URL,
      timeout: 5000,
    });
  }

  public async fetchData(): Promise<any> {
    try {
      const { data } = await this.api.get<any>(
        "https://akabab.github.io/starwars-api/api/all.json"
      );

      return data;
    } catch (err) {
      throw new Error("Fail to fetch data from external API");
    }
  }
}
/* dependecy injection prefered */
export const externalApiService = new ExternalApiService();
