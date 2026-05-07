-- 1. Build the structure
CREATE TABLE motorbikes (
    bike_id SERIAL Primary Key,
    bike_plate_num VARCHAR(20) UNIQUE NOT NULL,
    bike_make VARCHAR (50) NOT NULL,
    bike_model VARCHAR (100) NOT NULL,
    register_mileage INT NOT NULL,
    current_mileage INT NOT NULL,
    bike_status VARCHAR(20) DEFAULT 'Available' CHECK (bike_status IN ('Available', 'Rented', 'Maintenance', 'Retired'))
);

-- 2. Insert some initial fleet data
INSERT INTO motorbikes (bike_plate_num, bike_make, bike_model, register_mileage, current_mileage)
VALUES
('VDU6146', 'Yamaha', 'YZF-R15', 1500, 1500),
('VNP3603', 'Honda', 'Wave 125i', 12000, 12000),
('VMU1004', 'Honda', 'RSX-150', 32000, 32000);