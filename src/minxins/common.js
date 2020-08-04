export const Common = {
    methods: {
        initQuery() {
            //쿼리 던질떄 기본적으로 조회되어야 할 값들 정의
            const queryOptions = {
                searchQuery: "",
                about: "",
                wineType: [],
                priceRange: {
                    min: 0,
                    max: 100000
                },
                ratingRange: {
                    min: 0,
                    max: 5
                },
                nation: [],
                grape: [],
                foodpair: [],
                sortby: 'match',
                listnum: 15,
                offset: 0
            };
            return queryOptions;
        },
        gotoPath(a){
            this.$router.push({
                path: a
            }).catch(()=> {})
        },
        goDetails(id){
            this.$router.push({
                path: '/view/details/'+id
            }).catch(()=> {})
        },
        gotoSearch(about, squery){

            //검색 조건 및 구분값 기록
            squery.about = about;
            if (squery.about == 'brand') squery.menuTitle = '브랜드 별' ;
            if (squery.about == 'type') squery.menuTitle = '면 타입별' ;
            if (squery.about == 'bowl') squery.menuTitle = '용기 타입별' ;
            if (squery.about == 'nosel') squery.menuTitle = '단종된 라면' ;

            //검색한 값을 로컬스토리지에 기록
            const _squery = this.jsonTouri(squery);
            localStorage.setItem("squery", _squery);

            //호출값 체크
            console.log('search', {
                about,
                searchQuery: squery.searchQuery
            });

            //이동
            this.$router.push({
                path: '/view/list',
                query:{
                    query: _squery
                }
            }).catch(()=> {})
        },
        goBrandList(query){
            //기본 쿼리 유형 불러오기
            const newquery = this.initQuery() ;
            //함수에서 넘길 값을 포함해서 기본 쿼리에 업데이트
            newquery.searchQuery = "" + query;
            //기본 함수 호출
            this.gotoSearch("brand", newquery);
        },
        goTypeList(query){
            const newquery = this.initQuery() ;
            newquery.searchQuery = "" + query;
            this.gotoSearch("type", newquery);
        },
        goBowlList(query){
            const newquery = this.initQuery() ;
            newquery.searchQuery = "" + query;
            this.gotoSearch("bowl", newquery);
        },
        goNoselList(query){
            const newquery = this.initQuery() ;
            newquery.searchQuery = "" + query;
            this.gotoSearch("nosel", newquery);
        },
        jsonTouri(json) {
            //json 을 uri로 변환
            return btoa(encodeURIComponent(JSON.stringify(json)))
        },
        uriTojson(uri) {
            //uri를 json으로 변환
            return JSON.parse(decodeURIComponent(atob(uri)))
        }
    }
};