import { Show } from './show.model';

export class ShowsResponse {
	public shows: Show[];
	public meta: Meta;

	constructor(shows: Show[], meta: Meta) {
		this.shows = shows;
		this.meta = meta;
	}
}

class Meta {
	public pagination: Pagination;

	constructor(pagination: Pagination) {
		this.pagination = pagination;
	}
}

class Pagination {
	public count: number;
	public items: number;
	public page: number;
	public pages: number;

	constructor(count: number, items: number, page: number, pages: number) {
		this.count = count;
		this.items = items;
		this.page = page;
		this.pages = pages;
	}
}
