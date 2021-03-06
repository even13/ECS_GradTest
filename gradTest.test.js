function createMenuData(data){
  let menuData = [];
	data.map(string => {
		let element = string.split("/");
		if (element.length > 1) {
			let existingGroup = menuData.find(obj => {
				return obj.title == element[0];
			});
			if (existingGroup) {
				existingGroup.data.push(element[1]);
			} else {
				menuData.push({
          title: element[0],
          data: [element[1]]
				});
			}
		}
	})
	return menuData;
}

describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];
  
      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });