export interface Plant {
    common_name	: string;
    slug    : string;
    image_url : string;
    growth: {
        ph_maximum: number,
        ph_minimum: number,
        light: number,
        atmospheric_humidity: number,
        minimum_temperature: {
            deg_c: number;
        },
        maximum_temperature: {
            deg_c: number;
        }
    };
}
